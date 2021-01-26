const express = require('express');
const os = require('os');
const router = express.Router();
const db = require('../dbconnection');
const path = require("path");
const fs = require('fs');
const axios = require('axios');

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, "../../build/index.html"));
  }); 

  router.get('/cc', function(req, res, next) {
    fs.readFile(path.join(__dirname, '../../server/index.html'), function(error, data){
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(data, 'utf-8');
    });
  }); 

  router.get('/insta', function(req, res, next) {
    res.sendFile(path.join(__dirname, "../../build/index.html"));
  }); 

// 회원가입 로직
router.post('/save_result', (req, res) => {
  console.log("15문항(관심사 태그 포함");
  let param = [req.query.q_tag
    , req.query.q1, req.query.q2, req.query.q3
    , req.query.q4, req.query.q5, req.query.q6
    , req.query.q7, req.query.q8, req.query.q9
    , req.query.q10, req.query.q11, req.query.q12
    , req.query.q13, req.query.q14
    , req.query.c
    , req.query.ext
    , req.query.open
  ];
    
    console.log(req.query.q1);
    db.query("CALL PSY_SAVE_RESULT(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",param, (err, rows) => {
  
      if (!err) {
      res.json({"result":"succes" + rows});
        console.log("succes");
    } else {
      console.log(err);
      res.json({"result":"fail" + rows});
    }
    });
});
// 'localhost:4000/getdata'
router.get('/getData', (req, res) => {
  axios.get('http://13.209.8.68:3000/getData').then(res =>{
    console.log(res.data)
  });
});

module.exports = router;