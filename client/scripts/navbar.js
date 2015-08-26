Template.request.onRendered(function () {
  $('#modal1').openModal(); 
});

Template.navbar.events({
  "change #dropdown2": function(event) {
    var newValue = $(event.target).val();
    Session.set("type", newValue);
  },

  "submit form": function(event) {
    event.preventDefault();
    var name = $('#first_name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var organization = $('#organization').val();
    var orgDetails = $('#textarea1').val();
    var orgLocation = $('#dropdown1').val();
    var deadline = $('#date').val();
    console.log(deadline)
    Session.set("submitted", true);
  },

  "click a": function(event) {
    console.log("Preparing for page change");
    Session.set("pagechange", true);
  },
});


Template.navbar.helpers({

  submitted: function() {
    var tobeRtn = Session.get("submitted")
    return tobeRtn;
  },

  video: function() {
    var test = Session.get("type")
    if (test === "videography") {
      return true;
    } else {
      return false;
    }
  },

  photo: function() {
    var test = Session.get("type")
    if (test === "photography") {
      return true;
    } else {
      return false;
    }
  },
});
