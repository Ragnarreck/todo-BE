const { pick, omitBy, isNil, isEmpty, head, get } = require('lodash');
const { Users } = require('../database/mongo_modules');

module.exports = {
    getUsers: () => Users.find(),

    getUserNotes: params => Users.find({ creatorId: params.userId }),

    login: ({ login, password }) => {
        return Users.find({ login, password })
            .then(res => get(head(res), '_id'))
            .catch(() => new Error('Wrong login or password'));
    },

    addUser: params => Users.find({ login: get(params, 'login') })
        .then(res => {
            if (isEmpty(res)) {
                return new Users(
                    omitBy(pick(params, ['login', 'password']), isNil)
                ).save();
            } else {
                return { error: 'Sorry, user with the same login is already registered. Please, try with another login' };
            }
        })
        .catch(() => 'Sorry, user with the same login is already registered. Please, try with another login.'),
};