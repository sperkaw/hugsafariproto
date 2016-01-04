Meteor.publish("images", function(){ return Images.find(); });
Meteor.publish("teams", function(){ return Teams.find(); });
Meteor.publish('userList', function (){ 
  return Meteor.users.find({});
});