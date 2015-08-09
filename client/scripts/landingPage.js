Template.landing.helpers({
  images: function () {
    return MyImages.find(); // Where Images is an FS.Collection instance
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

Template.landing.onRendered(function() {
	$( document ).ready(function() {
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true // Displays dropdown below the button
    });
    $('.modal-trigger').leanModal();
    $('.button-collapse').sideNav('hide');
    $('input#input_text, textarea#textarea1').characterCounter();
    $('input#input_text, textarea#textarea2').characterCounter();
	});

    $(".button-collapse").sideNav();  
    $('.datepicker').pickadate({
		selectMonths: true,
		selectYears: 15 
	});
});

Template.landing.events({
  "change #dropdown": function(event) {
    var newValue = $(event.target).val();
    Session.set("type", newValue);
  }
});


