const express = require('./config/express');

const app = express();
const port = process.env.PORT || 4941;

app.listen(port, '192.168.1.211', function () {
    console.log(`Listening on port: ${port}`)
});