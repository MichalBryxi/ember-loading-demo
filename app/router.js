import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('slow');
  this.route('fast');
  this.route('nested', function() {
    this.route('deep');
  });
  this.route('blank', function() {
    this.route('deep');
  });
});

export default Router;
