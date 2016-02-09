Meteor.subscribe("officers");

Template.officers.helpers({
  officers: function() {
    return Officers.find({});
  },
});
