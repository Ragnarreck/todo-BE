const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const notesRoutes = require('./routes/notes/route');
const usersRoutes = require('./routes/users/route');
const app = express();
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use((req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
});

const routes = [notesRoutes, usersRoutes];

app.listen(process.env.APP_PORT, () => console.log(`listen in port ${process.env.APP_PORT}`));

routes.map(route => route(app, {}));