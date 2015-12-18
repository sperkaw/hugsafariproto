Router.configure({
  	layoutTemplate: 'layout',
  	loadingTemplate: 'loading'
});


Router.route('/', {name: 'start'});
Router.route('/team', {name: 'teamAanmelden'});
Router.route('/join', {name: 'teamAansluiten'});