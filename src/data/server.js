const express = require("express");
const app = express();

const mysql = require("mysql");

const cors = require("cors");

const port = 4000;
// 3줄 추가 
const ssl_port = 8080; // 80,443, 8080 3개 ssl 적용 포트
const https = require('https');
const fs = require('fs');

app.set("port", 4000);

const bodyParser = require("body-parser");

const connection = mysql.createConnection({
  host: '118.67.132.128',
  port: "3306",
  user: "tripsoda_psy",
  password: 'Sodatrip12!@',
});

// ssl 인증서 추가
const options = {
    ca: fs.readFileSync('/etc/letsencrypt/live/travelmbti.com/fullchain.pem'),
    key: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/travelmbti.com/privkey.pem'), 'utf8').toString(),
    cert: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/travelmbti.com/cert.pem'), 'utf8').toString(),
  };

app.use(bodyParser.json());
const corsOpt = function (req, callback) {
  callback(null, { origin: true });
};

app.options("*", cors(corsOpt));

const sql =
  "INSERT INTO `test`.`resulttable`(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, tag, result_char, extrovert, open) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
app.post("/save_result", cors(corsOpt), (req, res) => {
  const params = [];
  req.body.params.resultArray.map((value, index) => (params[index] = value));
  params[14] = req.body.params.tag;
  params[15] = req.body.params.character;
  params[16] = req.body.params.extrovert;
  params[17] = req.body.params.open;
  connection.query(sql, params, function (err, rows, fileds) {
    if (err) {
      console.log(err);
    } else {
      console.log(rows.insertId);
    }
  });
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
});

app.listen(port, () => {
  console.log(`server is listening at port->${port}`);
});

// https 서비스 시작
https.createServer(options, app).listen(ssl_port, () => {
    console.log(`Check out the app at https://localhost:${ssl_port}`);
  });