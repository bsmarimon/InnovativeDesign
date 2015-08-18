Meteor.startup(function () {
  console.log("Successful startup");
  Meteor.publish("events", function() {
    return Events.find();
  });
  Meteor.publish("blue", function() {
    return Blue.find();
  });
});

Meteor.methods({

  getEvents: function() {
    var eventList = Events.find({}).fetch();
    return eventList;
  },

  getBlueTier: function() {
    var designList = Blue.find({}).fetch();
    return designList;
  },

  getGoldTier: function() {
    var designList = Gold.find({}).fetch();
    return designList;
  },

});

Blue = new orion.collection('blue', {
  singularName: 'blue',
  pluralName: 'blues',
  link: {
    title: 'Blue Tier' 
  },
  tabular: {
    columns: [
      { data: "title", title: "Title" },
      orion.attributeColumn('image', 'image', 'Image'),
      orion.attributeColumn('createdBy', 'createdBy', 'Created By')
    ]
  }
});

Events = new orion.collection('events', {
  singularName: 'event',
  pluralName: 'events',
  link: {
    title: 'Events' 
  },
  tabular: {
    columns: [
      { data: "title", title: "Title" },
      { data: "location", title: "Location" },
      { data: "date", title: "Date" },
      { data: "time", title: "Time" },
      { data: "facebook_url", title: "Facebook Link" },
    ]
  }
});

Gold = new orion.collection('gold', {
  singularName: 'gold',
  pluralName: 'golds',
  link: {
    title: 'Gold Tier' 
  },
  tabular: {
    columns: [
      { data: "title", title: "Title" },
      orion.attributeColumn('image', 'image', 'Image'),
      orion.attributeColumn('createdBy', 'createdBy', 'Created By')
    ]
  }
});

