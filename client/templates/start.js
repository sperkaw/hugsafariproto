Template.home.helpers({
  userinteam: function () {
    if (!$.isEmptyObject(Meteor.user().profile)) {
      if (!$.isEmptyObject(Meteor.user().profile.teamid)) {
        Router.go('targetPagina')
      };
    } else {
      return true;
    }
  },
});