let router = require('express').Router();
let db = require('../config/db');

router.get('/',(req,res)=>{
    if(req.query.id&&req.query.id!=''){
        const sql = `SELECT * FROM BLOG_SETTINGS`;
        db.query(sql,(err,result)=>{
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