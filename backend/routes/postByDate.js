let router = require('express').Router();
let db = require('../config/db');

router.get('/',(req,res)=>{
    if(req.query.date&&req.query.date!=''){
        const sql = `SELECT ID,TITLE,TITLE_SLAG,COVER_IMAGE_LOCATION,DATE,DESCRIPTION FROM POST WHERE DATE=?`;
        db.query(sql,[req.query.date],(err,result)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(result);
            }
        });
    }
});

module.exports = router;