let router = require('express').Router();
let db = require('../config/db');

router.get('/',(req,res)=>{
    if(req.query.category&&req.query.category!=''){
        const sql = `SELECT ID,TITLE,TITLE_SLAG,AUTHOR,DATE,COVER_IMAGE_LOCATION,DESCRIPTION FROM POST WHERE ID IN (SELECT POST_ID FROM USED_TAGS WHERE TAG_ID IN(SELECT ID FROM TAG WHERE NAME = ?)) ORDER BY DATE`;
        db.query(sql,[req.query.category],(err,result)=>{
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