const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller')
const authMiddleware = require('../middlewares/authMiddleware')


router.post("/register",authController.register)
router.post('/login',authController.login)

router.get("/private",authMiddleware,async(req,res)=>{
    return res.status(200).json({userId:req.userId});
})

module.exports = router;