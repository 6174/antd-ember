import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('docs', function() {
		this.route('button');
		this.route('table');
	})
});

export default Router;
