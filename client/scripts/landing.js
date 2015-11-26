// Had a ton of trouble using CSS animations to do the front-end of the landing page

// Please find another way to do the animations, I beg you

Template.landing.onRendered(function () {

  // variable used to disable animations if the page changes
  Session.set("pagechange", false);

  // if the window is large enough, play the video, check to see if there's buffering
  if ($(window).width() >= 992) {
    var vid = document.getElementsByTagName('video')[0];
    vid.oncanplaythrough = function () {
      vid.play();
      var lastPlayPos = 0;
      var currentPlayPos = 0;
      var bufferingDetected = false;
      var bufferTimeout = setTimeout(function () {
        var bufferCheck = setInterval(function () {
            // checks to see if video is buffering
            currentPlayPos = vid.currentTime;
            var offset = 1/100;
            var check = Session.get("pagechange");
            var ran = Session.get("alreadyRan");
            if (!bufferingDetected && currentPlayPos < (lastPlayPos + offset) && (currentPlayPos > 2 && currentPlayPos < 40) && !check && !ran) {
              bufferingDetected = true;

              // disable a toast telling the user that the video is buffering, oh no!
              Materialize.toast('Looks like the video might be having some trouble. Feel free to refresh, wait, or check out the rest of the site!', 7000, 'videoProblems');
              
              // get rid of all the animations
              clearInterval(end1);
              clearInterval(end2);
              clearInterval(end3);
              clearInterval(end4);
              Session.set("alreadyRan", true);
              clearInterval(bufferCheck);
              clearInterval(bufferTimeout);
            }
            lastPlayPos = currentPlayPos;
        }, 100);
      }, 1000);

      // colors for the animation changes
      var colorTable = ["#3E85A5", "#E9B740", "#BC0037"];
      // the animations use a colorChange class, if an element has the class, it has it's color changed
      var c = document.getElementsByClassName('colorChange');

      // set the intervals
      // this code only handles the first iteration of color animations
      var end1 = setInterval(function () {
        for (var i = 0; i < c.length; i++) {
          c[i].style.backgroundColor = colorTable[0];
        }
      }, 41000);
      var end2 = setInterval(function () {
        for (var i = 0; i < c.length; i++) {
          c[i].style.backgroundColor = colorTable[1];
        }
      }, 24600);
      var end3 = setInterval(function () {
        for (var i = 0; i < c.length; i++) {
          c[i].style.backgroundColor = colorTable[2];
        }
      }, 33200);
      var end4 = setInterval(function () {
        // disable the animations if we leave the landing page
        var check = Session.get("pagechange");
        if (check) {
          clearInterval(end1);
          clearInterval(end2);
          clearInterval(end3);
          clearInterval(bufferTimeout);
          for (var i = 0; i < c.length; i++) {
            c[i].style.backgroundColor = colorTable[0];
          }
          clearInterval(end4);
        }
      }, 250);

      // clear all the animations after one run
      setTimeout(function () {
        clearInterval(end1);
        clearInterval(end2);
        clearInterval(end3);
      }, 41001);

      // start run two
      setInterval(function () {
        var end1 = setInterval(function () {
          for (var i = 0; i < c.length; i++) {
            c[i].style.backgroundColor = colorTable[0];
          }
        }, 41000);
        var end2 = setInterval(function () {
          for (var i = 0; i < c.length; i++) {
            c[i].style.backgroundColor = colorTable[1];
          }
        }, 24590);
        var end3 = setInterval(function () {
          for (var i = 0; i < c.length; i++) {
            c[i].style.backgroundColor = colorTable[2];
          }
        }, 33140);
        var end4 = setInterval(function () {
          if (check) {
            clearInterval(end1);
            clearInterval(end2);
            clearInterval(end3);
            clearInterval(bufferTimeout);
            for (var i = 0; i < c.length; i++) {
              c[i].style.backgroundColor = colorTable[0];
            }
            clearInterval(end4);
          }
        }, 250);

        setTimeout(function () {
          clearInterval(end1);
          clearInterval(end2);
          clearInterval(end3);
        }, 40501);
      }, 42000);
    };
  }

  console.log("#InnodPoetryTier");
});
