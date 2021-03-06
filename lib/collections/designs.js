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

Photo.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); },
});

Photo.attachSchema(new SimpleSchema({
  title: {
    type: String,
    optional: true
  },
  image: orion.attribute('image', {
      label: 'Image',
      optional: true
  }),
}));

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

Blue.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); },
});

Blue.attachSchema(new SimpleSchema({
  title: {
    type: String,
    optional: true
  },
  image: orion.attribute('image', {
      label: 'Image',
      optional: true
  }),
}));


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

Gold.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); },
});

Gold.attachSchema(new SimpleSchema({
  title: {
    type: String,
    optional: true
  },
  image: orion.attribute('image', {
      label: 'Image',
      optional: true
  }),
}));
