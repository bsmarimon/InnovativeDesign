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
      { data: "time", title: "Time" },
      { data: "facebook_url", title: "Facebook Link" },
      orion.attributeColumn('createdBy', 'createdBy', 'Created By')
    ]
  }
});

Events.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); },
});

Events.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  location: {
    type: String
  },
  time: {
    type: String
  },
  facebook_url: {
    type: String
  },
  createdBy: orion.attribute('createdBy') 
}));
