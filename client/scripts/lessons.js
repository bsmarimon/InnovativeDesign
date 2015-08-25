Meteor.subscribe("decal");

Template.lesson.helpers({
  show: function() {
    var show = Session.get("allow");
    return show;
  },
});

Template.lesson.onRendered(function () {
    var name = window.location.href;
    var number = name.slice(-1);
    number = parseInt(number);
    number = number - 1;
    Meteor.call('getDecal', function(err, permissionList) {
      console.log(permissionList);
      var permission = permissionList[number]['shown'];
      console.log(permission);
      if (permission == 'Y') {
        Session.set("allow", true);
      } else {
        Session.set("allow", false);
      }
    });
});

Template.lesson1.helpers({
  one: function() {
    var context = 
    {
    lesson: '1', title: 'Intro to Illustrator', 
    description: "Learn how to create a cool-looking abstract pattern which you can personalize with your own color choices and initials.",
      homework: "This week's homework is to get you comfortable with finding your away around Illustrator on your own! Follow the tutorial we did in class to make another cool pattern."
      }
      return context
  }
});

Template.lesson2.helpers({
  two: function() {
    var context = 
    {
    lesson: '2', title: 'Colors & Blending', 
    description: "Learn how to create a cool-looking abstract pattern which you can personalize with your own color choices and initials.",
      homework: "This week's homework is to get you comfortable with finding your away around Illustrator on your own! Follow the tutorial we did in class to make another cool pattern."
      }
      return context
  },
});

Template.lesson3.helpers({
  three: function() {
    var context = 
    {
    lesson: '3', title: 'Intro to Illustrator', 
    description: "Learn how to create a cool-looking abstract pattern which you can personalize with your own color choices and initials.",
      homework: "This week's homework is to get you comfortable with finding your away around Illustrator on your own! Follow the tutorial we did in class to make another cool pattern."
      }
      return context
  },
});

Template.lesson4.helpers({
  four: function() {
    var context = 
    {
    lesson: '4', title: "Brushes, Symbols, and Effects", 
    description: "Learn how to create a cool-looking abstract pattern which you can personalize with your own color choices and initials.",
    homework: "This week's homework is to get you comfortable with finding your away around Illustrator on your own! Follow the tutorial we did in class to make another cool pattern."
    }
    return context
  },
});

Template.lesson5.helpers({
  five: function() {
    var context = 
      {
    lesson: '5', title: "Typography", 
    description: "Learn how to create a cool-looking abstract pattern which you can personalize with your own color choices and initials.",
      homework: "This week's homework is to get you comfortable with finding your away around Illustrator on your own! Follow the tutorial we did in class to make another cool pattern."
      }
      return context
  },
});

Template.lesson6.helpers({
  six: function() {
    var context = 
      {
      lesson: '6', title: "Intro to Photoshop", 
    description: "Learn how to create a cool-looking abstract pattern which you can personalize with your own color choices and initials.",
      homework: "This week's homework is to get you comfortable with finding your away around Illustrator on your own! Follow the tutorial we did in class to make another cool pattern."
      }
      return context
  },
});

Template.lesson7.helpers({
  seven: function() {
    var context = 
    {
    lesson: '7', title: "Selection Tools & Masking", 
    description: "Learn how to create a cool-looking abstract pattern which you can personalize with your own color choices and initials.",
      homework: "This week's homework is to get you comfortable with finding your away around Illustrator on your own! Follow the tutorial we did in class to make another cool pattern."
      }
      return context
  },
});

Template.lesson8.helpers({
  eight: function() {
    var context = 
      {
    lesson: '8', title: "Blending, Layer Styles, and Filter Effects", 
    description: "Learn how to create a cool-looking abstract pattern which you can personalize with your own color choices and initials.",
      homework: "This week's homework is to get you comfortable with finding your away around Illustrator on your own! Follow the tutorial we did in class to make another cool pattern."
      }
      return context
  },
});

Template.lesson9.helpers({
  nine: function() {
    var context = 
      {
    lesson: '9', title: "Combining Programs", 
    description: "Learn how to create a cool-looking abstract pattern which you can personalize with your own color choices and initials.",
      homework: "This week's homework is to get you comfortable with finding your away around Illustrator on your own! Follow the tutorial we did in class to make another cool pattern."
      }
      return context
  },
});

Template.lesson10.helpers({
  ten: function() {
    var context = 
    {
    lesson: '10', title: 'Intro to Illustrator', 
    description: "Learn how to create a cool-looking abstract pattern which you can personalize with your own color choices and initials.",
      homework: "This week's homework is to get you comfortable with finding your away around Illustrator on your own! Follow the tutorial we did in class to make another cool pattern."
      }
      return context
  },
});

Template.lesson11.helpers({
  eleven: function() {
    var context = 
    {
    lesson: '11', title: 'Intro to Illustrator', 
    description: "Learn how to create a cool-looking abstract pattern which you can personalize with your own color choices and initials.",
      homework: "This week's homework is to get you comfortable with finding your away around Illustrator on your own! Follow the tutorial we did in class to make another cool pattern."
      }
      return context
  },
});

