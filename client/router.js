Router.configure({
  	layoutTemplate: 'layout',
  	loadingTemplate: 'loading',
  	waitOn: function () {
	 return Meteor.subscribe('teams')
	},
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

Router.route('/', {name: 'home'});
//Router.route('/team', {name: 'teamAanmelden'});
Router.route('/join', {name: 'teamAansluiten'});

Router.route('/target', {name: 'targetPagina'});

Router.route('/challenges', {name: 'challenges'});

Router.route('/gevonden', {name: 'gevonden'});

Router.route('/admin', {name: 'admin'});


Router.route('/joinfriends', {
    name: 'teamToevoegen',
    waitOn: function() {
        return Meteor.subscribe('userList');
    },
    data: function() {
        return Meteor.users.find({});       
    }
 });