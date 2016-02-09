Meteor.subscribe("events");

Template.events.helpers({
  events: function() {
    return Events.find({});
  },
});
