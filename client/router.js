Router.configure({
  	layoutTemplate: 'layout',
  	loadingTemplate: 'loading'
});

Router.route('/teamAanmelden',{
 waitOn: function () {
 return Meteor.subscribe('images')
 },
 action: function () {
 if (this.ready())
 this.render('teamAanmelden');
 else
 this.render('Loading');
 }
});

Router.route('/', {name: 'start'});
//Router.route('/team', {name: 'teamAanmelden'});
Router.route('/join', {name: 'teamAansluiten'});