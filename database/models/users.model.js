const mongoose = require('../mongo_db');
const ObjectId = mongoose.Schema.ObjectId;

module.exports = mongoose.model('User', {
    id: {
        type: ObjectId,
    },
    login: {
        type: String,
    },
    password: {
        type: String
    }
});