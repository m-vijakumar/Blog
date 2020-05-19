const express=require("express");
const router =express.Router();
const bodyparser=require("body-parser");
const key =require("../../setup/connect").TOKEN_KEY;
const blogController = require("../../controllers/blog")
const tokenHelper = require("../../helpers/sessionVerfiy")


// @type    POST
//@route    /api/admin/blog/create
// @desc    starting router
// @access  PRAVITE 

router.post("/create",tokenHelper.sessionVerfiy,blogController.create)

// @type    GET
//@route    /api/admin/blog/all-post
// @desc    starting router
// @access  PUBLIC

router.get("/all-posts",blogController.getAllPosts)


// @type    POST
//@route    /api/admin/blog/post
// @desc    starting router which required post_id
// @access  PUBLIC 

router.post("/post",blogController.getPost)


// @type    POST
//@route    /api/admin/blog/update
// @desc    starting router
// @access  PRAVITE 

router.post("/update",tokenHelper.sessionVerfiy,blogController.updatePost)


// @type    DELETE
//@route    /api/admin/blog/DELETE
// @desc    starting router to delete post
// @access  PRAVITE 

router.delete("/delete",tokenHelper.sessionVerfiy,blogController.deletePost)

module.exports = router;
