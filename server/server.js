MyImages = new FS.Collection('myImages', {
    stores: [new FS.Store.GridFS("myImages")]
});
Tiers = new Mongo.Collection("tiers");
Officers = new Mongo.Collection("officers");

Meteor.startup(function () {
	console.log("Successful startup");
	Meteor.publish("tiers", function() {
		return Items.find();
	})
	Meteor.publish("myImages", function() {
		return myImages.find();
	})
});

Meteor.methods({

	insertDesign: function(tier, image) {

		Tiers.insert({
			tier: tier,
			image: image,
		});
	
	return true;

	},

	insertOfficer: function(name, blurb, image, position, twitter, instagram) {

		Officers.insert({
			name: name,
			blurb: blurb,
			image: image,
			position: position,
			twitter: twitter,
			instagram: instagram
		});

	return true;

	},
});