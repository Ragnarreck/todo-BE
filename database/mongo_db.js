const mongoose = require('mongoose');
require('dotenv').config();

mongoose
    .connect(process.env.DB_MONGO_URL, { useNewUrlParser: true })
    .then(() => console.log('mongoose connected'))
    .catch((err) => console.log(err));

module.exports = mongoose;