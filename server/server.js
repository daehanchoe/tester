const express = require('express');
const path = require('path');
const router = require("./routes/router");
const app = express();
// const vhost = require('vhost');

app.use("/", router);
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, '..', 'build/')));

    // http 서버를 구동 합니다.
    app.listen(3000, () => {
    console.log("3000 server start");
    });