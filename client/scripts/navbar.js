Template.request.onRendered(function () {
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

Template.navbar.onRendered(function () {
  Session.set("open", false);
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


  "click a": function(event) {
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

  "open": function() {
    var formStatus = Session.get("open");
    formStatus = !formStatus;
    return formStatus;
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
