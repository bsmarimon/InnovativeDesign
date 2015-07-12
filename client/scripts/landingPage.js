Template.landing.helpers({
  images: function () {
    return MyImages.find(); // Where Images is an FS.Collection instance
  }
});

Template.landing.onRendered(function() {
	$( document ).ready(function() {
    $('input#input_text, textarea#textarea1').characterCounter();
	});
    $(".button-collapse").sideNav();  
    $('.datepicker').pickadate({
		selectMonths: true,
		selectYears: 15 
	});
});

