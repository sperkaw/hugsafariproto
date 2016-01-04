Template.gevonden.helpers({
  images: function () {
    if (!$.isEmptyObject(Meteor.user().profile)) {
      return Meteor.user().profile.image
    }; 
    //Images.find(); // Where Images is an FS.Collection instance
  }
});

Template.gevonden.events({
  'change .myFileInput': function(event, template) {
    console.log("change");
      FS.Utility.eachFile(event, function(file) {
        Images.insert(file, function (err, fileObj) {
          if (err){
             // handle error
          } else {
             // handle success depending what you need to do
            var userId = Meteor.userId();
            var imagesURL = {
              "profile.image": "/cfs/files/images/" + fileObj._id
            };
            
          }
        });
     });
   }
});