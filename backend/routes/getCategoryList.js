let router = require('express').Router();
let db = require('../config/db');

router.get('/',(req,res)=>{
    const sql = `SELECT NAME FROM TAG WHERE ID IN(SELECT TAG_ID FROM USED_TAGS)`;
    db.query(sql,(err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            let tags = [];
            for(let i of result){
                tags.push(i['NAME']);
            }
            res.json(tags);
        }
    });
});

module.exports = router;