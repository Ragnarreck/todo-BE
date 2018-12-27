module.exports = {
    handleError: (err, code, res) => res.status(code).send({ error: err })
};