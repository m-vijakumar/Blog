const express=require("express");
const router =express.Router();
const bodyparser=require("body-parser");
const key =require("../../setup/connect").TOKEN_KEY;
const blogController = require("../../controllers/blog")
const tokenHelper = require("../../helpers/sessionVerfiy")


// @type    GET
//@route    /api/admin/blog/create
// @desc    starting router
// @access  PRAVITE 

router.post("/create",tokenHelper.sessionVerfiy,blogController.create)

// @type    GET
//@route    /api/admin/blog/create
// @desc    starting router
// @access  PRAVITE 2

router.post("/all-posts",blogController.getAllPosts)


// @type    GET
//@route    /api/admin/blog/create
// @desc    starting router
// @access  PRAVITE 2

router.post("/post",blogController.getPost)


// @type    GET
//@route    /api/admin/blog/create
// @desc    starting router
// @access  PRAVITE 2

router.post("/update",tokenHelper.sessionVerfiy,blogController.updatePost)


// @type    GET
//@route    /api/admin/blog/create
// @desc    starting router
// @access  PRAVITE 2

router.delete("/delete",tokenHelper.sessionVerfiy,blogController.deletePost)

module.exports = router;
