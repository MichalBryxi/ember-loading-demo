import Ember from 'ember';

export default Ember.Component.extend({
  // TODO: Experiment with marking new records
  // classNameBindings: ['isNew:table-info'],
  tagName: 'tr',

  isNew: Ember.computed('model', 'lastUpdate', function() {
    return this.get('model.lastUpdate') > this.get('lastUpdate');
  })
});
