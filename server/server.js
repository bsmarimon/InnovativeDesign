Meteor.startup(function () {
  console.log("Successful startup");
  Meteor.publish("events", function() {
    return Events.find();
  });
  Meteor.publish("blue", function() {
    return Blue.find();
  });
  Meteor.publish("photo", function() {
    return Photo.find();
  });
  Meteor.publish("officers", function() {
    return Officers.find();
  });
  Meteor.publish("decal", function() {
    return Decal.find();
  });
  Meteor.publish("gold", function () {
    return Gold.find();
  });
});



Meteor.methods({

  // old, do not use

  getEvents: function() {
    var eventList = Events.find({}).fetch();
    return eventList;
  },

  getOfficers: function() {
    var officerList = Officers.find({}).fetch();
    return officerList;
  },

  getBlueTier: function() {
    var designList = Blue.find({}).fetch();
    return designList;
  },

  getGoldTier: function() {
    var designList = Gold.find({}).fetch();
    return designList;
  },

  getPhotoTier: function() {
    var designList = Photo.find({}).fetch();
    return designList;
  },
  
  getDecal: function() {
    var designList = Decal.find({}).fetch();
    return designList;
  },
});
