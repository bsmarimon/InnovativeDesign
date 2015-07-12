MyImages = new FS.Collection('myImages', {
    stores: [new FS.Store.GridFS("myImages")]
});

Template.imageUpload.rendered = function(){

  if (Meteor.isClient){

    var arrayOfImageIds = [];

    Dropzone.autoDiscover = false;

    // Adds file uploading and adds the imageID of the file uploaded
    // to the arrayOfImageIds object.

    var dropzone = new Dropzone("form#dropzone", {
        accept: function(file, done){
            MyImages.insert(file, function(err, fileObj){
                if(err){
                  console.log(err)
                  alert("Error");
                } else {
                  console.log(file);
                  console.log(fileObj);
                };
            });
        }
    });
  };
};
