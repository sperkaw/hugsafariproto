Template.targetPagina.helpers({
  images: function () {

  	if (!$.isEmptyObject(Teams.findOne(Meteor.user().profile.teamid).targetteamID)) {
	  	var targetTeamID = Teams.findOne(Meteor.user().profile.teamid).targetteamID;
	  	var targetTeamImageURL = Teams.findOne(targetTeamID).imagesURL;
	    return "/cfs/files/images/" + targetTeamImageURL;
	} else {
		return "/images/notarget.png";
	}
  },
  teamname: function () {
  	return Teams.findOne(Meteor.user().profile.teamid).teamName;
  }
});

Template.targetPagina.events({

});