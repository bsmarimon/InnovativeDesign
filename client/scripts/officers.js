Meteor.subscribe("officers");

Template.officers.helpers({
  officers: function() {
    var priority = {
      "President": 10,
      "Internal": 9,
      "Design Services": 8,
      "Photo Services": 8,
      "External": 7,
      "Education": 6,
      "Admin": 5,
      "Tech": 4,
      "Marketing": 3,
      "Finance": 2,
      "Recollections": 1,
      "Advisor": 0,
    }
    return Officers.find({}).fetch().sort(function(a, b) {
      var a_p = -1;
      var b_p = -1;
      if(a.position in priority) {
        a_p = priority[a.position];
      }
      if(b.position in priority) {
        b_p = priority[b.position];
      }
      if(a_p > b_p) {
        return -1;
      } else if (a_p < b_p) {
        return 1;
      } else {
        return 0;
      }
    });
  },
});
