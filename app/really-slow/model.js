import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  name: DS.attr('string'),

  // TODO: experiment with marking new records
  lastUpdate: Ember.computed('name', function() {
    return new Date();
  })
});
