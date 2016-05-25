export default function() {
  this.namespace = '/api';    // make this `api`, for example, if your API is namespaced
  this.get('/slows');
}
