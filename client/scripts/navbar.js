Template.request.onRendered(function () {
  $('#modal1').openModal(); 
});

Template.navbar.onRendered(function () {
  $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: false // Displays dropdown below the button
  });
  $('.modal-trigger').leanModal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    in_duration: 300, // Transition in duration
    out_duration: 200, // Transition out duration
  });
  $('.tooltipped').tooltip({delay: 50});
  $('.button-collapse').sideNav('hide');
  $('input#input_text, textarea#textarea1').characterCounter();
  $('input#input_text, textarea#textarea2').characterCounter();
  $('input#input_text, textarea#textarea3').characterCounter();
  $(".button-collapse").sideNav();  
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 15 
  });
});

Template.navbar.events({
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
    var orgType1 = $('#dropdown1').val();
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



    var test = {
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

    console.log(test);

    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbyWo6AfGdMPBVawrg2-3jrUxgFBkDItq4q73M0v6NZqt2jXGTk/exec",
      data: test,
      type: "POST",
      dataType: "xml",
    });
    Session.set("submitted", true);
  },

  "click a": function(event) {
    var name = event.target.id;
    if (name === "requestclick") {
      Session.set("pagechange", false);
    } else {
      Session.set("pagechange", true);
    }
  },
});


Template.navbar.helpers({
  submitted: function() {
    var tobeRtn = Session.get("submitted")
    return tobeRtn;
  },

  video: function() {
    var test = Session.get("type")
    if (test === "videography") {
      return true;
    } else {
      return false;
    }
  },

  photo: function() {
    var test = Session.get("type")
    if (test === "photography") {
      return true;
    } else {
      return false;
    }
  },
});
