Template.request.onRendered(function () {
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 15 
  });
  $('input[name=ProposedDeadline').pickadate({
    selectMonths: true,
    selectYears: 15 
  });
  $('#modal1').openModal(); 
});

Template.club.onRendered(function () {
  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });
});

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

// Initialize almost every plug-in the site uses.

Template.navbar.onRendered(function () {
  Session.set("submitted", false);
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 15 
  });
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
  Session.set("alreadyRan", false);
  $('.tooltipped').tooltip({delay: 50});
  $('.button-collapse').sideNav('hide');
  $('input#input_text, textarea#textarea1').characterCounter();
  $('input#input_text, textarea#textarea2').characterCounter();
  $('input#input_text, textarea#textarea3').characterCounter();
  $(".button-collapse").sideNav();  
  $('.materialboxed').materialbox();
  $('ul.tabs').tabs();
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
      Session.set("submitted", true);
      $.ajax({
        url: "https://script.google.com/macros/s/AKfycbyWo6AfGdMPBVawrg2-3jrUxgFBkDItq4q73M0v6NZqt2jXGTk/exec",
        data: send,
        type: "POST",
        dataType: "xml",
      });
    }   
  },

  "click a": function(event) {
    $('.datepicker').pickadate({
      selectMonths: true,
      selectYears: 15 
    });
    var name = event.target.id;
    if (name === "requestclick") {
      Session.set("pagechange", false);
      Session.set("alreadyRan", true);
    } else {
      Session.set("pagechange", true);
      Session.set("alreadyRan", true);
    }
  },
});

Template.navbar.helpers({
  video: function() {
    var test = Session.get("type")
    if (test === "videography") {
      return true;
    } else {
      return false;
    }
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

  open: function() {
    return false;
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
