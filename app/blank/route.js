import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // TODO: experiment with marking new records
    var controller = this.controllerFor('blank');
    controller.set('lastUpdate', new Date());

    return this.store.findAll('really-slow');
  }
});
