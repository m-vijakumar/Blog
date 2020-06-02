const express=require("express");
const router =express.Router();
const bodyparser=require("body-parser");
const key =require("../../setup/connect").TOKEN_KEY;
const userController = require("../../controllers/user")
const tokenHelper = require("../../helpers/sessionVerfiy")

router.use(bodyparser.urlencoded({extended:false}));
router.use(bodyparser.json());

const commentsController = require("../../controllers/comments")

router.post("/",commentsController.getvalidate , commentsController.addmessage)
router.get("/getfeedbacks",tokenHelper.sessionVerfiy, commentsController.getfeeback)

router.delete("/deletefeedback", commentsController.deletefeedback)

module.exports = router;