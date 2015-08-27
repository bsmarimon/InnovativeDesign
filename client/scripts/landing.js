
// Beauty is in the eye of the beholder but this code is really messy regardless of that.


Template.landing.onRendered(function () {
  $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: false // Displays dropdown below the button
  });
  $('.modal-trigger').leanModal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    in_duration: 300, // Transition in duration
    out_duration: 200, // Transition out duration
  });
  $('.button-collapse').sideNav('hide');
  $('input#input_text, textarea#textarea1').characterCounter();
  $('input#input_text, textarea#textarea2').characterCounter();
  $(".button-collapse").sideNav();  
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 15 
  });
  
  Session.set("pagechange", false);
  
  var vid = document.getElementsByTagName('video')[0];
  console.log(vid);
  vid.oncanplaythrough = function () {
    vid.play();
    console.log("can play now");
    var timeTable = [5000, 25000, 2000];
    var colorTable = ["#3680A5", "#EDB439", "#CB0F36"];
    var s = document.getElementsByTagName('nav')[0].style;
    var c = document.getElementsByClassName('colorChange');
    var d = document.getElementsByClassName("bottom")[0].style;
    var e = document.getElementsByClassName("footerIcons");

    var end1 = setInterval(function () {
      s.backgroundColor = colorTable[0];
      d.backgroundColor = colorTable[0];
      for (var i = 0; i < c.length; i++) {
        c[i].style.backgroundColor = colorTable[0];
      }
      for (var i = 0; i < e.length; i++) {
        e[i].style.backgroundColor = colorTable[0];
      }
      console.log("changed to blue");
    }, 42000);

    var end2 = setInterval(function () {
      s.backgroundColor = colorTable[1];
      d.backgroundColor = colorTable[1];

      for (var i = 0; i < c.length; i++) {
        c[i].style.backgroundColor = colorTable[1];
      }
      for (var i = 0; i < e.length; i++) {
        e[i].style.backgroundColor = colorTable[1];
      }
      console.log("changed to yellow");
    }, 25250);

    var end3 = setInterval(function () {
      s.backgroundColor = colorTable[2];
      d.backgroundColor = colorTable[2];

      for (var i = 0; i < c.length; i++) {
        c[i].style.backgroundColor = colorTable[2];
      }
      for (var i = 0; i < e.length; i++) {
        e[i].style.backgroundColor = colorTable[2];
      }
      console.log("changed to red");
    }, 33750);

    var end4 = setInterval(function () {
      var check = Session.get("pagechange");
      if (check) {
        clearInterval(end1);
        clearInterval(end2);
        clearInterval(end3);
        s.backgroundColor = colorTable[0];
        d.backgroundColor = colorTable[0];

        for (var i = 0; i < c.length; i++) {
          c[i].style.backgroundColor = colorTable[0];
        }
        for (var i = 0; i < e.length; i++) {
          e[i].style.backgroundColor = colorTable[0];
        }
        console.log("changed to blue");
        clearInterval(end4);
      }
    }, 250);

    setTimeout(function () {
      clearInterval(end1);
      clearInterval(end2);
      clearInterval(end3);
    }, 42001);


    setInterval(function () {
      var end1 = setInterval(function () {
        s.backgroundColor = colorTable[0];
        d.backgroundColor = colorTable[0];

        for (var i = 0; i < c.length; i++) {
          c[i].style.backgroundColor = colorTable[0];
        }
        for (var i = 0; i < e.length; i++) {
          e[i].style.backgroundColor = colorTable[0];
        }
        console.log("changed to blue");
      }, 42000);

      var end2 = setInterval(function () {
        s.backgroundColor = colorTable[1];
        d.backgroundColor = colorTable[1];

        for (var i = 0; i < c.length; i++) {
          c[i].style.backgroundColor = colorTable[1];
        }
        for (var i = 0; i < e.length; i++) {
          e[i].style.backgroundColor = colorTable[1];
        }
        console.log("changed to yellow");
      }, 25225);

      var end3 = setInterval(function () {
        s.backgroundColor = colorTable[2];
        d.backgroundColor = colorTable[2];

        for (var i = 0; i < c.length; i++) {
          c[i].style.backgroundColor = colorTable[2];
        }
        for (var i = 0; i < e.length; i++) {
          e[i].style.backgroundColor = colorTable[2];
        }
        console.log("changed to red");
      }, 33750);

      var end4 = setInterval(function () {
        var check = Session.get("pagechange");
        if (check) {
          clearInterval(end1);
          clearInterval(end2);
          clearInterval(end3);
          s.backgroundColor = colorTable[0];
          d.backgroundColor = colorTable[0];

          for (var i = 0; i < c.length; i++) {
            c[i].style.backgroundColor = colorTable[0];
          }
          for (var i = 0; i < e.length; i++) {
            e[i].style.backgroundColor = colorTable[0];
          }
          console.log("changed to blue");
          clearInterval(end4);
        }
      }, 250);

      setTimeout(function () {
        clearInterval(end1);
        clearInterval(end2);
        clearInterval(end3);
      }, 42001);
    }, 42002);
  };
});
