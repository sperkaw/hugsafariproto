Template.teamAansluiten.helpers({
  teams: function () {

      return Teams.find()
  }
});

Template.teamAansluiten.events({
  'click .button' : function(event, template){
    var teamID = event.target.attributes.value.value;
    var userID = Meteor.user()._id;
    var teamMembers = Teams.findOne(teamID).teammembers;
    debugger
    teamMembers.push(userID)
    teamMembers = {teammembers:teamMembers};
    Teams.update(teamID,{$set:teamMembers })

    var userId = Meteor.userId();
    Meteor.users.update(userId, {$set: {"profile.teamid":teamID}});
    Router.go('targetPagina')
  }
});