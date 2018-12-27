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

app.listen(process.env.APP_PORT, () => console.log(`listen in port ${process.env.APP_PORT}`));

routes.map(route => route(app, {}));