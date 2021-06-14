let router = require('express').Router();
let db = require('../config/db');

router.get('/',(req,res)=>{
    if(req.query.id&&req.query.id!=''){
        const sql = `SELECT ID,FULL_NAME,EMAIL,PROFILE_PIC_LOCATION,BIO FROM ADMIN WHERE ID=?`;
        db.query(sql,[req.query.id],(err,result)=>{
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