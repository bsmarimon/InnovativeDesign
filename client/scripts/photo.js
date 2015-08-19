Meteor.subscribe("photo");

Template.photo.helpers({
  photo: function() {
    return Session.get("photo");
  },
});

Template.photo.onRendered(function(){
  $('ul.tabs').tabs();
});

Template.photo.onCreated(function() {
  Meteor.call('getPhotoTier', function(err, eventList) {
    if (eventList) {

      var designs = eventList;
      var numDesigns = designs.length;
      var layouts = {};
      var temp = numDesigns;
      var counter = 0;
      var base = "page";
      
      while (temp > 0) {
        var pageNum = String(counter + 1);
        var page = base + pageNum;
        layouts[page] = {};
        temp = temp - 12;
        counter = counter + 1;
      }

      var keys = Object.keys(layouts);
      counter = 0;
      while (counter < keys.length) {
        var key = keys[counter];
        layouts[key]["column1"] = [];
        layouts[key]["column2"] = [];
        layouts[key]["column3"] = [];
        counter = counter + 1;
      }

      counter = 0;
      var layoutKeys = Object.keys(layouts);
      var columnKeys = Object.keys(layouts["page1"]);
      var pageNum = 0;
      var columnNum = 0;
      var columnIndex = 0;

      while (counter < numDesigns) {
        pageKey = layoutKeys[pageNum];
        columnKey = columnKeys[columnNum];
        layouts[pageKey][columnKey][columnIndex] = designs[counter];
        counter = counter + 1;
        columnIndex = columnIndex + 1;
        if (counter % 4 === 0) {
          columnNum = columnNum + 1;
          columnIndex = 0;
        }
        if (counter === 12) {
          columnNum = 0;
          pageNum = pageNum + 1;
        }
      }
      console.log(layouts);
      Session.set("photo", layouts);
    } else {
      alert("Failed to render page");
    }
  });
});



