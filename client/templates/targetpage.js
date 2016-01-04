Template.targetPagina.helpers({
  images: function () {
    return Teams.findOne().imagesURL
  }
});

Template.targetPagina.events({

});