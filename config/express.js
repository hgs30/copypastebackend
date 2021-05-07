const express = require('express');
const bodyParser = require('body-parser');
const { allowCrossOriginRequestsMiddleware } = require('../app/middleware/cors.middleware');
var cors = require('cors');

module.exports = function () {
    // INITIALISE EXPRESS //
    const app = express();
    app.rootUrl = '/api/v1';

    // MIDDLEWARE
    app.use(allowCrossOriginRequestsMiddleware);
    app.use(bodyParser.json());

    // ROUTES
    require('../app/routes/main.routes')(app);

    return app;
};
