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
    $('.button-collapse').sideNav('hide');
    $('input#input_text, textarea#textarea1').characterCounter();
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
    console.log(newValue);
    Session.set("type", newValue);
  }
});


