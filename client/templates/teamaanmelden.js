Template.teamAanmelden.helpers({
    // photoUpOptions: ->
    // loadImage:
    //    # ... see loadImage site
    // crop: true # If true do jCrop with setting below
    // jCrop:
    //     # ... see jcrop site
    // callback: (error, photo) ->
    //    # Do what you want with the photo.  Save it?
})

Template.teamAanmelden.events({
   'change .myFileInput': function(event, template) {
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
            Meteor.users.update(userId, {$set: imagesURL});
          }
        });
     });
   }
});