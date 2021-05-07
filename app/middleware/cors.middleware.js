exports.allowCrossOriginRequestsMiddleware = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://192.168.1.211:8080');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    next();
};