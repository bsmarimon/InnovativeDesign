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

Officers.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); },
});

Officers.attachSchema(new SimpleSchema({
  name: {
    type: String,
  },
  position: {
    type: String,
  },
  major: {
    type: String,
  },
  grad: {
    type: String,
  },
  quote: {
    type: String,
  },
  tier: {
    type: String,
  },
  image: orion.attribute('image', {
      label: 'Image',
      optional: true
  }),
}));
