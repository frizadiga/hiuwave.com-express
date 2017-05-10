var express = require('express');
var router = express.Router();

// GET JSON Response

router.get('/',(req,res,next)=>{
	res.json({message:"JSON Response"});
});

module.exports = router;