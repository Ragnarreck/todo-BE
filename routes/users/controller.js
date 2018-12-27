const { isEmpty } = require('lodash');
const mongo = require('../../services/users_mongo_dao');
const { handleError } = require('../../utils/router.utils');
const currentDB = mongo;

module.exports = {
    getUsers(req, res) {
        currentDB.getUsers()
            .then((response) => res.send(response))
            .catch(err => handleError(err, 400, res));
    },

    login(req, res) {
        currentDB.login(req.body)
            .then(info => isEmpty(info)
                ? handleError('Wrong login or password', 400, res)
                : res.send(info))
            .catch(() => handleError('Wrong login or password', 400, res));
    },

    addUser(req, res) {
        currentDB.addUser(req.body)
            .then(info => {
                if (info.error) handleError(info.error, 400, res);
                else res.send(info);
            })
            .catch(err => handleError(err, 400, res));
    }
};