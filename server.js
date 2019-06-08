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

const routes = [notesRoutes, usersRoutes];

const port = process.env.APP_PORT || 8080;
app.listen(port, () => console.log(`listen in port ${port}`));

routes.map(route => route(app, {}));
