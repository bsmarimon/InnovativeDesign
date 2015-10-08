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
    homework: "This week's homework is to get you comfortable with finding your away around Illustrator on your own! Follow the tutorial we did in class to make another cool pattern.",
    link: "https://www.dropbox.com/sh/zvd57h13pfzt62c/AACbun9oc0aVlajzfY0ieOpla?dl=0"
    }
    return context
  }
});

Template.lesson2.helpers({
  two: function() {
    var context = 
    {
    lesson: '2', title: 'Pen Tool', 
    description: "Get your pop art on by using pen tool to create a graphic in Roy Lichtenstein's comic-book style. You'll be honing your skills with anchors and handles, and even playing with stroke width to get a Lichtenstein-like effect.",
    homework: "Pick a favorite character from a cartoon or animation, lock it underneath, and start tracing away with pen tool! After you have a set of lines you're happy with, be sure to use Live Paint to color it in.",
    link: "https://www.dropbox.com/sh/70rw67m5eubihne/AAAMUBFxpUw2LMeYuAwWwvZ1a?dl=0"
    }
    return context
  },
});

Template.lesson3.helpers({
  three: function() {
    var context = 
    {
    lesson: '3', title: 'Color', 
    description: "Learn how to make blends and gradients in Illustrator and how to use these tools to create an original composition.",
    homework: "Pen tool a scene of your choice, and then go to Edit -> Edit Colors -> Recolor Artwork to create a day and night scene. Make sure you incorporate both the gradient tool and the blend tool into the work you've created.",
    link: "https://www.dropbox.com/sh/0libo1c4ul1l5o3/AADaSFE5BMXFNPpz-dK10GyRa?dl=0"
    }
    return context
  },
});

Template.lesson4.helpers({
  four: function() {
    var context = 
    {
    lesson: '4', title: "Brushes, Symbols, and Effects", 
    description: "Learn how to make all different types of brushes and apply them in a fun poster series about New York City.",
    homework: "Create a poster of a landmark using the pen tool. Stylize your poster by applying brushes to your paths!",
    link: "https://www.dropbox.com/sh/dontw0n4r4np54e/AAApy9lC7d3ENM93CMk80QLYa?dl=0"
    }
    return context
  },
});

Template.lesson5.helpers({
  five: function() {
    var context = 
    { 
    lesson: '5', title: "Typography", 
    description: "For this week's lesson, we'll talk a little about typography and how you can manipulate type in your designs.",
    homework: "No weekly homework this week! BUT you should start working on your Midterm Project. Create an infographic about anything you want. Incorporate 3 facts about your topic and make an illustration for each of them. You must use at least 3 tools that we've learned in class, so get creative and have fun!"
    }
    return context
  },
});

Template.lesson6.helpers({
  six: function() {
    var context = 
    {
    lesson: '6', title: "Intro to Photoshop", 
    description: "Learn your way around the Photoshop interface while fixing up a portrait. We'll play with everything from saturation to lighting to spothealing. Remember, photo editing ideally should be minor retouches which can make a major difference.",
    homework: "Find a photo of a celebrity with no makeup on and use at least two tools you learned to fix the photo up. Imagine you work for a fashion magazine and must make the photo cover-ready!"
    }
    return context
  },
});

Template.lesson7.helpers({
  seven: function() {
    var context = 
    {
    lesson: '7', title: "Selection Tools & Masking", 
    description: "This week's lesson is all about selection tools and masks. You'll learn how to cut out parts of an image as well as hide parts of an image that you don't want to see. We'll be following the tutorial at bit.ly/lesson7tutorial and doing a group activity in class!",
    homework: "Make a promotional poster for a fictional sitcom. Use the selection tools and masking techniques from today's lesson to cut out and arrange the people you want to star in your show as well as the tools from last week to enhance the images you've chosen!"
    }
    return context
  },
});

Template.lesson8.helpers({
  eight: function() {
    var context = 
    {
    lesson: '8', title: "Blending, Layer Styles, and Filter Effects", 
    description: "Learn how to apply special effects on text & images using blending modes, layer styles, and filter effects!",
    homework: "Using your new knowledge of blending modes, clipping & layer masks, make a sci-fi movie poster! Put a subject or two onto a cool background, apply some textures, and give your movie a name."
    }
    return context
  },
});

Template.lesson9.helpers({
  nine: function() {
    var context = 
    {
    lesson: '9', title: "Combining Programs", 
    description: "Learn how to combine Illustrator & Photoshop to create cool composite images and designs.",
    homework: "No homework this week--just start working on your final project, which is to redo the album cover of your favorite album and make a matching lyric poster!"
    }
    return context
  },
});

Template.lesson10.helpers({
  ten: function() {
    var context = 
    {
    lesson: '10', title: 'Identity & Ad Design', 
    description: "Apply everything you've learned this semester by rebranding and creating an advertisement design for a company!",
    homework: "None!",
    }
    return context
  },
});

Template.lesson11.helpers({
  eleven: function() {
    var context = 
    {
    lesson: '11', title: 'Final Showcase', 
    description: "Our last class will be a potluck style showcase! Bring some snacks to share and see all the work you and your classmates have accomplished this semester. The course will conclude with everyone presenting to the class their final project.",
    homework: "None!",
    }
    return context
  },
});

