const express = require('express');
const router = express.Router();
const fs = require("fs");

router.get('/api/questionaire', (req, res) => {

  let data = fs.readFileSync( __dirname +'/questionaire' +".json", 'utf8', function (err, data) {
        
    });

    res.send(data);

 
 });

module.exports = router