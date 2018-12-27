const controllers = require('./controller');
module.exports = (app)  => {
    app.get('/users', controllers.getUsers);
    app.post('/users', controllers.addUser);
    app.post('/login', controllers.login);
};