let router = require('express').Router();
let db = require('../config/db');

router.get('/',(req,res)=>{
    if(req.query.search&&req.query.search!=''){
        db.query(`SELECT ID,TITLE,TITLE_SLAG FROM POST WHERE TITLE LIKE ?`,[`${req.query.search}%`],(err,result)=>{
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