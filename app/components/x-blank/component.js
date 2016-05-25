import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['style'],

  style: Ember.computed(function() {
    let width = Math.floor((Math.random() * 70) + 5);
    return `width: ${width}%; background-color: #ddd;`;
  })
});
