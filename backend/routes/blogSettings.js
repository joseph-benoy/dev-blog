let router = require('express').Router();
let db = require('../config/db');

router.get('/',(req,res)=>{
    const sql = `SELECT * FROM BLOG_SETTINGS`;
    db.query(sql,(err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            let settings = {};
            for(let i of result){
                settings[i['PARAM']] = i['VALUE'];
            }
            res.json(settings);
        }
    });
});

module.exports = router;