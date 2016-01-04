Template.teamToevoegen.helpers({
  users: function () {
  	//debugger;
  	return Meteor.users.find();
    

    //Images.find(); // Where Images is an FS.Collection instance
  },
  teamName: function () {
    return Meteor.user().profile.teamname
  }
});
var selectedUsers = [];
Template.teamToevoegen.events({
	'click .button' : function(event, template){
		var userID = event.target.attributes.value.value
		selectedUsers.push(userID)
	},
  	'change .saveTeam': function(event, template) {
    console.log("save");
    var teamMembers = {"teammembers":selectedUsers}
    Teams.update(Meteor.user().profile.teamid,{$set:teamMembers })
	Router.go('targetPagina') 
    // Meteor.users.update(userId, {$set: team});    
   }
});