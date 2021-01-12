const express = require('express');
const os = require('os');
const router = express.Router();
const db = require('../dbconnection');
const path = require("path");
const fs = require('fs');


router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, "../../build/index.html"));
    // res.sendFile(express.static(path.join(__dirname, '../../build/index.html')));
    // res.sendFile("./view/test.html");
  }); 

  router.get('/cc', function(req, res, next) {
    // res.sendFile(path.join(__dirname, "../../src/pages/Result.js"));
    // res.sendFile(path.join(__dirname, '../../server/index.html'));
    fs.readFile(path.join(__dirname, '../../server/index.html'), function(error, data){
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(data, 'utf-8');
    });
  }); 

  router.get('/insta', function(req, res, next) {
    res.sendFile(path.join(__dirname, "../../build/index.html"));
  }); 

// 회원가입 로직
router.get('/save_result', (req, res) => {
  console.log("in");
  let param = [req.query.q1, req.query.q2, req.query.q3
    , req.query.q4, req.query.q5, req.query.q6
    , req.query.q7, req.query.q8, req.query.q9
    , req.query.q10, req.query.q11, req.query.q12
    , req.query.q13, req.query.q14, req.query.q15];
    
    console.log(req.query.q1);
    db.query("CALL PSY_SAVE_RESULT(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",param, (err, rows) => {
    // db.query("INSERT INTO PSY_STATS VALUES((SELECT MAX(CNT)+1 FROM PSY_STATS),?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT REPLACE(REPLACE(NOW(),'-',''),':','')))",param, (err, rows) => {
      // db.query("INSERT INTO PSY_STATS VALUES(2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,(SELECT REPLACE(REPLACE(NOW(),'-',''),':','')))",param, (err, rows) => {
      if (!err) {
      res.json({"result":"succes" + rows});
        console.log("succes");
    } else {
      console.log(err);
      res.json({"result":"fail" + rows});
    }
    });
});

router.get('/getData', (req, res) => {
    db.query("select * from PSY_INFO", (err, rows) => {
    if (!err) {
        res.send(rows);
    } else {
        console.log(`query error : ${err}`);
        res.send(err);
    }
    });
});

module.exports = router;