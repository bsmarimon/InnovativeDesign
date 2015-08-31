// Beauty is in the eye of the beholder but this code is really messy regardless of whoever thinks what.

Template.landing.onRendered(function () {
  Session.set("pagechange", false);
  
  if ($(window).width() >= 992) {
    var vid = document.getElementsByTagName('video')[0];
    vid.oncanplaythrough = function () {
      vid.play();
      var timeTable = [5000, 25000, 2000];
      var colorTable = ["#3680A5", "#EDB439", "#CB0F36"];
      var c = document.getElementsByClassName('colorChange');

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
        var check = Session.get("pagechange");
        if (check) {
          clearInterval(end1);
          clearInterval(end2);
          clearInterval(end3);
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
      }, 41001);

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
  console.log("Love is patient, love is kind.");
  console.log("It does not envy, it does not boast.");
  console.log("It is not proud. It is not rude.");
  console.log("It is not self-seeking. It is not easily angered.");
  console.log("It keeps no record of wrongs.");
  console.log("Love does not delight in evil");
  console.log("But rejoices with the truth.");
  console.log("It always protects, always trusts,");
  console.log("Always hopes, always perseveres:");
  console.log("Love never fails.");
});
