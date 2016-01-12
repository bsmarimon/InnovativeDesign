// should replace Meteor.call, otherwise onCreated does pre-processing to the data so it can render as three columns

Meteor.subscribe("blue");
Meteor.subscribe("gold");

Template.graphic.helpers({
  blue: function() {
    return Session.get("blue");
  },
  gold: function() {
    return Session.get("gold");
  },

});

Template.graphic.onRendered(function () {
  $('ul.tabs').tabs();
  setTimeout(function () {
    $('.materialboxed').materialbox();
  }, 1000);
});

Template.graphic.onCreated(function() {
  eventList = Blue.find({}).fetch();
  console.log(eventList);
  if (eventList) {
    designs = eventList;
    numDesigns = designs.length;

    third = (numDesigns - numDesigns % 3)/3;
    
    layouts = {};
    layouts["column1"] = [];
    layouts["column2"] = [];
    layouts["column3"] = [];

    counter = 0;
    position = 0;
    limit = third
 
    while (counter < limit) {
      layouts["column1"][position] = designs[counter];
      position = position + 1;
      counter = counter + 1;
    }

    limit = limit + third
    position = 0;

    while (counter < limit) {
      layouts["column2"][position] = designs[counter];
      position = position + 1;
      counter = counter + 1;
    }

    limit = limit + third
    position = 0;

    while (counter < limit) {
      layouts["column3"][position] = designs[counter];
      position = position + 1;
      counter = counter + 1;
    }

    leftovers = numDesigns - limit;
    
    if (leftovers == 2) {
      layouts["column1"][third] = designs[numDesigns - 1];
      layouts["column2"][third] = designs[numDesigns - 2];
    }
    if (leftovers == 1) {
      layouts["column1"][third] = designs[numDesigns - 1];
    }

    Session.set("blue", layouts);
  } else {
    alert("Failed to render page");
  }

  eventList = Gold.find({}).fetch();
  console.log(eventList);
  if (eventList) {

    designs = eventList;
    numDesigns = designs.length;

    third = (numDesigns - numDesigns % 3)/3;
    
    layouts = {};
    layouts["column1"] = [];
    layouts["column2"] = [];
    layouts["column3"] = [];

    counter = 0;
    position = 0;
    limit = third
 
    while (counter < limit) {
      layouts["column1"][position] = designs[counter];
      position = position + 1;
      counter = counter + 1;
    }

    limit = limit + third
    position = 0;

    while (counter < limit) {
      layouts["column2"][position] = designs[counter];
      position = position + 1;
      counter = counter + 1;
    }

    limit = limit + third
    position = 0;

    while (counter < limit) {
      layouts["column3"][position] = designs[counter];
      position = position + 1;
      counter = counter + 1;
    }

    leftovers = numDesigns - limit;
    
    if (leftovers == 2) {
      layouts["column1"][third] = designs[numDesigns - 1];
      layouts["column2"][third] = designs[numDesigns - 2];
    }
    if (leftovers == 1) {
      layouts["column1"][third] = designs[numDesigns - 1];
    }

    Session.set("gold", layouts);
  } else {
    alert("Failed to render page");
  }
});

