Meteor.subscribe("photo");

Template.photo.helpers({
  photo: function() {
    return Session.get("photo");
  }
});

// just pre-processing to render as three columns

Template.photo.onCreated(function() {
  Meteor.call('getPhotoTier', function(err, eventList) {
    if (eventList) {
      console.log(eventList);
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
      
      Session.set("photo", layouts);
    } else {
      alert("Failed to render page");
    }
  });
});



