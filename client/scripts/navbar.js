Template.request.onRendered(function () {
  $('#modal1').openModal(); 
});

Template.navbar.helpers({
  submitted: function() {
    var tobeRtn = Session.get("submitted")
    return tobeRtn;
  },
  graphic: function() {
    var test = Session.get("type")
    if (test === "graphicdesign") {
      return true;
    } else {
      return false;
    }
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

  web: function() {
    var test = Session.get("type")
    if (test === "webdesign") {
      return true;
    } else {
      return false;
    }
  }
});

Template.navbar.onRendered(function() {
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
  $('.button-collapse').sideNav('hide');
  $('input#input_text, textarea#textarea1').characterCounter();
  $('input#input_text, textarea#textarea2').characterCounter();
  $(".button-collapse").sideNav();  
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 15 
  });
});

Template.navbar.events({
  "change #dropdown": function(event) {
    var newValue = $(event.target).val();
    Session.set("type", newValue);
  },
  "submit form": function(event) {
    event.preventDefault();
    Session.set("submitted", true);
  }
});
