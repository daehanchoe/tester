const express = require('express');
const os = require('os');
const router = express.Router();
const db = require('../dbconnection');
const path = require("path");



router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, "../../build/index.html"));
    // res.sendFile(express.static(path.join(__dirname, '../../build/index.html')));
    // res.sendFile("./view/test.html");
  }); 

  router.get('/cc', function(req, res, next) {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  }); 

  router.get('/b', function(req, res, next) {
    res.sendFile(path.join(__dirname, "../../server/index.html"));
  }); 

/* GET home page. */
router.get('/api/getUsername', (req, res, next) => {
    res.send({ username: os.userInfo().username });
});

router.get('/getData', (req, res) => {
    db.query("select * from dbt", (err, rows) => {
    if (!err) {
        res.send(rows);
    } else {
        console.log(`query error : ${err}`);
        res.send(err);
    }
    });
});

module.exports = router;