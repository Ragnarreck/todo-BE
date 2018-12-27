const { isNil, pick, omitBy } = require('lodash');
const { Notes } = require('../database/mongo_modules');

module.exports = {
    getNotes: ({ id, date, group }) => {
        const params = { date, group, creatorId: id };
        const paramsObj = Object.keys(params).filter(item => params[item]);
        return Notes.find(
            pick(params, paramsObj)
        );
    },

    addNote: params => new Notes(
        omitBy(
            pick(params, ['creatorId', 'date', 'description', 'group', 'title']
            ), isNil)
    ).save(),

    updateNote: note => Notes
        .find({ _id: note._id })
        .then(([response]) => {
            Object.assign(response, pick(note, ['creatorId', 'date', 'description', 'group', 'title']));
            return response.save();
        }),

    removeNote: id => Notes.findOneAndRemove({ _id: id }).then(() => id),
};