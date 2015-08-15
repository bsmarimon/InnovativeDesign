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

Meteor.startup(function () {
	console.log("Successful startup");
	Meteor.publish("events", function() {
		return Events.find();
	});
	Meteor.publish("designs", function() {
		return Designs.find();
	});
});

Meteor.methods({

	getEvents: function() {
		var eventList = Events.find({}).fetch();
		console.log(eventList);
		return eventList;
	},

	getDesigns: function() {
		var designList = Designs.find({}).fetch();
		console.log(designsList);
		return designList;
	},

});