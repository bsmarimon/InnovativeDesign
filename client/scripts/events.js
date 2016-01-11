Meteor.subscribe("events");

Template.events.helpers({
  events: function() {
    return Session.get("events");
  },
});

Template.events.onCreated(function() {
  eventList = Events.find({}).fetch();
  Session.set("events", eventList);
});
