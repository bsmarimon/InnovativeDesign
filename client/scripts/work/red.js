Template.red.events({
  "click #redapply": function(event) {
    Session.set("redapplying", true);
    setTimeout(function() {
      Session.set("red", true);
      Session.set("redapplying", false);
    }, 2000);
  },
});

Template.red.helpers({
  applying: function() {
    return Session.get("redapplying");
  },
  applied: function() {
    return Session.get("red");
  }
});
