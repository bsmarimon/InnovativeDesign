Meteor.subscribe("events");

Template.events.helpers({
  events: function() {
    return Session.get("events");
  },
});

Template.events.onCreated(function() {
  Meteor.call('getEvents', function(err, eventList) {
    Session.set("events", eventList);
  });
});