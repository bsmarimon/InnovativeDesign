// Data used to render the decal page, really only uses the titles

Template.decal.helpers({
	lessons: function() {
		var lessons = [
      {
      lesson: '1', title: 'Intro to Illustrator', 
      },
      {
      lesson: '2', title: 'Pen Tool', 
      },
      {
      lesson: '3', title: 'Color', 
      },
      {
      lesson: '4', title: "Brushes, Symbols, and Effects", 
      },		
      { 
      lesson: '5', title: "Typography", 
      },
      {
      lesson: '6', title: "Intro to Photoshop", 
      },
      {
      lesson: '7', title: "Selection Tools & Masking", 
      },
      {
      lesson: '8', title: "Blending, Layer Styles, and Filter Effects", 
      },
      {
      lesson: '9', title: "Combining Programs", 
      },		
      {
      lesson: '10', title: 'Identity & Ad Design', 
      },
      {
      lesson: '11', title: 'Final Showcase', 
      }
	];
	return lessons;
	},
});
