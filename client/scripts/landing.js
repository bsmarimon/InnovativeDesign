Meteor.subscribe("events");

Template.landing.onCreated(function() {
	Meteor.call('getEvents', function(err, eventList) {
		Session.set("events", eventList);
		var test = Session.get("events");
		console.log(test);
	});
});