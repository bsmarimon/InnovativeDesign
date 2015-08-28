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
});

Meteor.methods({
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
      orion.attributeColumn('image', 'image', 'Image'),
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
    ]
  }
});

Photo = new orion.collection('photo', {
  singularName: 'photo',
  pluralName: 'photos',
  link: {
    title: 'Photo Tier' 
  },
  tabular: {
    columns: [
      { data: "title", title: "Title" },
      orion.attributeColumn('image', 'image', 'Image'),
    ]
  }
});

Officers = new orion.collection('officer', {
  singularName: 'officer',
  pluralName: 'officers',
  link: {
    title: 'Officers' 
  },
  tabular: {
    columns: [
      { data: "name", title: "Full Name" },
      { data: "position", title: "Position" },
      { data: "major", title: "Major" },
      { data: "grad", title: "Graduation Year" },
      { data: "quote", title: "Blurb" },
      { data: "tier", title: "Tier" },
      orion.attributeColumn('image', 'image', 'Image'),
    ]
  }
});

Decal = new orion.collection('decal', {
  singularName: 'decal',
  pluralName: 'decals',
  link: {
    title: 'Decal' 
  },
  tabular: {
    columns: [
    { data: "lesson", title: "Lesson" },
    { data: "shown", title: "Viewable on website?" },
  ]
  }
});