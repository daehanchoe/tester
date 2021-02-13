const express = require('express');
const path = require('path');
const router = require("./routes/router");
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 8080;
const https = require('https');
// const vhost = require('vhost');

app.use("/", router);
app.use(cors());
app.set('views', __dirname + '/views');
// app.use(vhost('www.test01.com/'))

// const privateKey = fs.readFileSync(path.join(__dirname, './server.key')).toString();
// const certificate = fs.readFileSync(path.join(__dirname, './server.crt')).toString();

// const options = {
//     key: privateKey,
//     cert: certificate,
//     passphrase: 'eogks0616' // certificate을 생성하면서 입력하였던 passphrase 값
//   };

//   app.use(vhost("www.my-domain.co.kr",express.static(path.join(__dirname, '..', 'build/'))));
// app.use(express.static(path.join(__dirname, '..', 'public/')));
app.use(express.static(path.join(__dirname, '..', 'build/')));

const options = {
    ca: fs.readFileSync('/etc/letsencrypt/live/travelmbti.com/fullchain.pem'),
    key: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/travelmbti.com/privkey.pem'), 'utf8').toString(),
    cert: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/travelmbti.com/cert.pem'), 'utf8').toString(),
  };

    
    
    // http 서버를 구동 합니다.
    app.listen(3000, () => {
    console.log("80 server start");
    });
    
    https.createServer(options, app).listen(PORT, () => {
    // colorConsole.success(`[HTTPS] Soda Server is started on port ${colors.cyan(PORT)}`);
    console.log(`Check out the app at https://localhost:${PORT}`);
  });