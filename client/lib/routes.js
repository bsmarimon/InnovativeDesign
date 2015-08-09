Router.route('/', function() {
	this.render('landing');
});

Router.route('/officers', function() {
	this.render('officers');
});

Router.route('/image', function() {
	this.render('imageUpload');
});

Router.route('/submission', function() {
	this.render('content');
});

Router.route('/contact', function() {
	this.render('contact');
});

Router.route('/teams', function() {
	this.render('teams');
});

Options.set('forbidClientAccountCreation', true);

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
