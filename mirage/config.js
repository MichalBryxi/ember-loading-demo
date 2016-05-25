export default function() {
  this.namespace = '/api';    // make this `api`, for example, if your API is namespaced
  this.get('/slows', { timing: 2000 });
  this.get('/fasts', { timing: 0 });
  this.get('/really-slows', { timing: 3000 });
  this.get('/really-slows/:id', { timing: 100 });
}
