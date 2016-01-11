

Template.club.onRendered(function () {
  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });
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
  $('.tooltipped').tooltip({delay: 50});
  $('.button-collapse').sideNav('hide');
  $('input#input_text, textarea#textarea1').characterCounter();
  $('input#input_text, textarea#textarea2').characterCounter();
  $('input#input_text, textarea#textarea3').characterCounter();
  $(".button-collapse").sideNav();  
  $('.materialboxed').materialbox();
  $('ul.tabs').tabs();
});

