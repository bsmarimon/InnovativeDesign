Meteor.subscribe("officers");

Template.officers.helpers({
  officers: function() {
    return Session.get("officers");
  },
});

Template.officers.onCreated(function() {
  Meteor.call('getOfficers', function(err, eventList) {
    Session.set("officers", eventList);
  });
});