let express = require('express');
let router = express.Router();
let db = require('../config/db');
router.get('/',(req,res)=>{
    db.query(`SELECT ID,TITLE,TITLE_SLAG,DATE,COVER_IMAGE_LOCATION FROM POST`,(err,result,fileds)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

module.exports = router;