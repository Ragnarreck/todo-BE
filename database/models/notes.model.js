const mongoose = require('../mongo_db');
const ObjectId = mongoose.Schema.ObjectId;

module.exports = mongoose.model('Note', {
  id: {
    type: ObjectId,
  },
  creatorId: {
    type: String,
  },
  group: {
    type: String,
  },
  date: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  }
});