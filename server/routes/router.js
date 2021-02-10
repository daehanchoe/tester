const express = require('express');
const os = require('os');
const router = express.Router();
const db = require('../dbconnection');
const path = require("path");
const fs = require('fs');
const axios = require('axios');
const cors = require('cors');

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
router.post('/save_result',cors(), function(req, res) {
  console.log("back in!!");
  console.log(req.query);
  // console.log(req.body);
  // console.log(req.query.esultArray);
  // console.log(req.query.result[0]);
  // console.log(req.query.tag);
  // console.log(req.query.character);
  // console.log(req.query.open);
  // console.log(req.query.extrovert);

  let param = [req.query.tag
    , req.query.resultArray[0], req.query.resultArray[1], req.query.resultArray[2]
    , req.query.resultArray[3], req.query.resultArray[4], req.query.resultArray[5]
    , req.query.resultArray[6], req.query.resultArray[7], req.query.resultArray[8]
    , req.query.resultArray[9], req.query.resultArray[10], req.query.resultArray[11]
    , req.query.resultArray[12], req.query.resultArray[13]
    , req.query.character
    , req.query.extrovert
    , req.query.open
  ];
    
    db.query("CALL PSY_SAVE_RESULT(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",param, (err, rows) => {
  
      if (!err) {
        res.setHeader('Access-Control-Allow-Origin','*');
        res.setHeader('Access-Control-Allow-Credentials', "true");
        res.json({"result":"success"});
    } else {
      console.log(err);
      res.json({"result":"fail" + rows});
    }
    });
});
// 'localhost:4000/getdata'
router.get('/getData', (req, res1) => {
  axios.post('http://118.67.132.128:8000/save_result').then(res =>{
    console.log(res.data)
    res1.json({"result":"success"});
  });
});

module.exports = router;