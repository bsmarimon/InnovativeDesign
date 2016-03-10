Meteor.subscribe("request_types");

Template.thankyou.events({
  "click #submitagain": function(event) {
    $('#modal1').openModal(); 
  },
});

// Phrases that are injected into the thank you for submitting a request template

Template.thankyou.helpers({
  phrase: function() {
    phrases = [
      "squad of intelligent owls",
      "pack of quick-witted otters",
      "crew of charismatic bears",
      "group of avocado enthusiasts",
    ];
    var rand = phrases[Math.floor(Math.random() * phrases.length)];
    return rand;
  }
});

Template.requestFix.onRendered(function () {
  $('#modal1').openModal();
});

Template.request.onRendered(function () {
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 15,
    min: 20,
    max: false
  });
  $('input[name=ProposedDeadline]').pickadate({
    selectMonths: true,
    selectYears: 15,
    min: 20,
    max: false
  });
  $('.modal-trigger').leanModal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    in_duration: 300, // Transition in duration
    out_duration: 200, // Transition out duration
  });
  Session.set("alreadyRan", false);
  var pageName = window.location.href;
  Session.set("pageName", pageName);
  Session.set("submitting", false);
});

Template.request.events({
  "change #dropdown2": function(event) {
    var newValue = $(event.target).val();
    Session.set("type", newValue);
  },

  "submit form": function(event) {
    event.preventDefault();
    var contactName1 = $('#first_name').val();
    var contactEmail1 = $('#email').val();
    var contactNum1 = $('#phone').val();
    var orgName1 = $('#organization').val();
    var orgInfo1 = $('#textarea1').val();
    var orgType1 = $('#dropdown3').val();
    var date1 = $('#date').val();
    var serviceType1 = $('#dropdown2').val();

    var service = Session.get("type");
    if (service === "videography" || service === "photography") {
      var shootLoc1 = $('#shoot_location').val();
    } else {
      var shootLoc1 = 'n/a';
    }
    var addInfo1 = $('#textarea2').val();
    var questions1 = $('#textarea3').val();

    var send = {
      timestamp: (new Date()).toString().slice(4,24),
      contactName: contactName1,
      contactEmail: contactEmail1,
      contactNum: contactNum1,
      orgName: orgName1,
      orgInfo: orgInfo1,
      orgType: orgType1,
      date: date1,
      serviceType: service,
      shootLoc: shootLoc1,
      addInfo: addInfo1,
      questions: questions1,
    };

    var canSend = true;
    if (canSend) { 
      Session.set("submitting", true);
      $.ajax({
        url: "https://script.google.com/macros/s/AKfycbyWo6AfGdMPBVawrg2-3jrUxgFBkDItq4q73M0v6NZqt2jXGTk/exec",
        data: send,
        type: "POST",
        dataType: "json",
        success: function(data, text) {
          Session.set("submitted", true);
        },
        error: function (request, status, error) {
          /* http://stackoverflow.com/questions/15093281/safari-ajax-cors-request-not-following-redirect */
          var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
          if(isSafari) {
            /* just have to hope it worked!! safari won't tell us anything about why it failed!!!!!!!!! */
            Session.set("submitted", true);
          } else {
            alert("There was an error submitting your request. Please try again. If the issue persists, please contact an officer!");
            console.error(error);
          }
        },
        complete: function () {
          Session.set("submitting", false);
        }
      });
    }   
  },
});

Template.request.helpers({
  requestTypes: function() {
    return RequestTypes.find({});
  },

  anyRequestTypesClosed: function() {
    return RequestTypes.find({request_status: false}).fetch().length > 0;
  },

  closedRequestTypes: function() {
    types = RequestTypes.find({request_status: false}).fetch();
    types = types.map(function(doc) { return doc.request_type });
    if(types.length == 0) {
      return "";
    } else if(types.length == 1) {
      return types[0];
    } else {
      var arr = types.slice(0), last = arr.pop();
      return arr.join(', ')  + ' and ' + last;
    }
  },

  photo: function() {
    return  Session.get("type") === "Photography";
  },

  video: function() {
    return Session.get("type") === "Videography";
  },

  phrase: function() {
    phrases = [
      "squad of intelligent owls",
      "pack of quick-witted otters",
      "crew of charismatic bears",
      "group of avocado enthusiasts",
    ];
    var rand = phrases[Math.floor(Math.random() * phrases.length)];
    return rand;
  },

  submitted: function() {
    var test = Session.get("submitted");
    return test;
  },

  submitting: function() {
    return Session.get("submitting");
  },

  // Change to true to open the requests form, false to close
  open: function() {
    return true;
  },
});
