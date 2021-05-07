const main = require('../controllers/main.controller');

module.exports = function (app) {
    app.route(app.rootUrl + '/')
        .get(main.getAll)
        .post(main.add)
        .delete(main.makeclean);
};