Template.landing.helpers({
  images: function () {
    return MyImages.find(); // Where Images is an FS.Collection instance
  }
});

Template.landing.onRendered(function() {
	$(document).ready(function() {
		$('ul.tabs').tabs();
    $('input#input_text, textarea#textarea1').characterCounter();
    $('.datepicker').pickadate({
		    selectMonths: true,
		    selectYears: 15 
		  });
	})
});

