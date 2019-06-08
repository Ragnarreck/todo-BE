const moment = require('moment');
const mongo = require('../../services/notes_mongo_dao');
const { handleError } = require('../../utils/router.utils');
const currentDB = mongo;

module.exports = {
  getNotes(req, res) {
    currentDB.getNotes(req.params)
             .then((response) => res.send(response))
             .catch(err => handleError(err, 400, res));
  },

  addNote(req, res) {
    currentDB.addNote(req.body)
             .then(info => res.send(info))
             .catch(err => handleError(err, 400, res));
  },

  updateNote(req, res) {
    currentDB.updateNote(req.body)
             .then(response => res.send(response))
             .catch(err => handleError(err, 400, res));
  },

  removeNote(req, res) {
    const id = req.params.id;
    currentDB.removeNote(id)
             .then(response => res.send(response))
             .catch(err => handleError(err, 400, res));
  },

  test(req) {
    console.log('in');
    console.log(req.body);
  }
};
