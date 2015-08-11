Designs = new orion.collection('designs', {
  singularName: 'design',
  pluralName: 'designs',
  link: {
    title: 'Designs' 
  },
  tabular: {
    columns: [
      { data: "title", title: "Title" },
      orion.attributeColumn('image', 'image', 'Image'),
      orion.attributeColumn('createdBy', 'createdBy', 'Created By')
    ]
  }
});

Designs.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); },
});

Designs.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  image: orion.attribute('image', {
      label: 'Image',
      optional: true
  }),
  createdBy: orion.attribute('createdBy') 
}));