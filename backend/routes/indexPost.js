let express = require('express');
let router = express.Router();
let mysql = require('mysql');

router.get('/',(req,res)=>{
    const offset = (req.query.pageNo-1)*req.query.postsPerPage;
    
});