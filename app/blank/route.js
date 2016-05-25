import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // var controller = this.controllerfor('nested');

    // controller.set('currentlyloading', false);


      console.log('model');
      return this.store.findAll('really-slow').then(function (data) {
        console.log('findAll.then()');
        // controller.set('currentlyloading', true);
        return data;
      });
    // });
  },

  setupController: function(controller, model) {
    // Call _super for default behavior
    this._super(controller, model);


    console.log('setupController');
    // model.then(function () {
    //   console.log('setupController');
    //
    // })
    // // Implement your custom setup after
    // this.controllerFor('nested').set('model', model);
  },

  afterModel(model, transition) {
    // let controller = this.controllerfor('nested');
    // // controller.set('currentlyloading', false);
    //   model.then(function() {
    console.log('afterModel');
      //   controller.set('currentlyLoading', false);
      // });
  },

  actions: {
    loading(transition, originRoute) {
      console.log('loading action');
      // let controller = this.controllerFor('foo');
      // controller.set('currentlyLoading', true);
      transition.promise.finally(function() {
        console.log('loading action transition.promise.finally')
          // controller.set('currentlyLoading', false);
      });
      return true;
    }
  }

});
