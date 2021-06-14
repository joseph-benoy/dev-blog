let router = require('express').Router();
let db = require('../config/db');
router.get('/',(req,res)=>{
    console.log('!!!!!!!!!!!   '+req.query.title);
    if(req.query.title&&req.query.title!=''){
        db.query(`SELECT * FROM POST WHERE TITLE_SLAG=?`,[req.query.title],(err,result)=>{
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