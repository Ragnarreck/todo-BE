const controllers = require('./controller');
module.exports = (app)  => {
  app.get('/notes', controllers.getNotes);
  app.get('/notes/user/:id', controllers.getNotes);
  app.get('/notes/user/:id/:date', controllers.getNotes);
  app.get('/notes/user/:id/:date/:group', controllers.getNotes);
  app.post('/note', controllers.addNote);
  app.put('/note/:id', controllers.updateNote);
  app.delete('/note/:id', controllers.removeNote);
  app.get('/test', controllers.test);
};
