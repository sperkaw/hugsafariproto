Template.teamAanmelden.helpers({
  images: function () {
    return Meteor.user().profile.image
    //Images.find(); // Where Images is an FS.Collection instance
  },
  teamName: function () {
    return Meteor.user().profile.teamname
  }
});

Template.teamAanmelden.events({
  'change .myFileInput': function(event, template) {
    console.log("chang");
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
   },
  'change .teamName': function(event, template) {
    console.log("changtext");
      //debugger
            
      var userId = Meteor.userId();
      var team = {"profile.teamname":event.target.value};

      Meteor.users.update(userId, {$set: team});
         
     
   }
});