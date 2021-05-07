const express = require('express');

const app = express();
const port = process.env.PORT || 4941;

app.listen(port, function () {
    console.log(`Listening on port: ${port}`)
});