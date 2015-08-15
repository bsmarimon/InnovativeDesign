Meteor.subscribe("events");

Template.landing.helpers({
	events: function() {
		return Session.get("events");
	},
});

Template.landing.onCreated(function() {
	Meteor.call('getEvents', function(err, eventList) {
		Session.set("events", eventList);
	});
});