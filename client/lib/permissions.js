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


Decal.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); },
});

Decal.attachSchema(new SimpleSchema({
  lesson: {
    type: String,
  },
  shown: {
    type: String,
  },
}));