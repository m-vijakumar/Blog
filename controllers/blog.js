const Blog = require("../models/Bolg")


exports.validCredentials = (req,res,next) =>{

    req.assert("postId", "Not Found").notEmpty();

    req.getValidationResult(req,res,next)
    .then((result)=>{
        if(!result.isEmpty()){
            
           console.log( result.array()[0].msg)
            return res.status(400).json({
                error : true,
                message : result.array()[0].msg
            })
        }
        next();
    });
};

exports.validCreateCredentials = (req,res,next) =>{

    req.assert("title", "title Should not be Empty").notEmpty();
    req.assert("content", "content Should not be Empty").notEmpty();
    req.assert("category", "category Should not be Empty").notEmpty();

    req.getValidationResult(req,res,next)
    .then((result)=>{
        if(!result.isEmpty()){
            
           console.log( result.array()[0].msg)
            return res.status(400).json({
                error : true,
                message : result.array()[0].msg
            })
        }
        next();
    });
};
exports.create = async(req,res) =>{

    const {title ,content,category} = req.body;

    let page = new Blog({
        title:title,
        content:content,
        category:category,
        createdOn:Date.now()
    }) 
    await page.save()
    .then(()=>{
        res.json({
            error:false,
            msg:"Post Added"
        })
    })
    .catch((err)=>{
        res.json({
            error:true,
            msg:"internal Error...!"
        })
    })

};


exports.getAllPosts = async(req,res)=>{

    await Blog .find({},{content:0}).sort({createdOn:-1})
                .then((result)=>{
                    res.json({
                        error:false,
                        data:result
                    })
                }).catch((err)=>{
                    res.json({
                        error:true,
                        msg:"err  :"+err
                    })
                })
}
exports.getPost = async(req,res)=>{

    await Blog .findOne({ _id: req.body.postId })
                .then((result)=>{
                    res.json({
                        error:false,
                        data:result
                    })
                }).catch((err)=>{
                    res.json({
                        error:true,
                        msg:"err  :"+err
                    })
                })
}
exports.updatePost = async(req,res)=>{

    await Blog .findOneAndUpdate({ _id: req.body.postId },{$set :{content:req.body.content}},{new:true})
                .then((result)=>{
                    res.json({
                        error:false,
                        data:result
                    })
                }).catch((err)=>{
                    res.json({
                        error:true,
                        msg:"err  :"+err
                    })
                })
}
exports.deletePost = async(req,res)=>{

    await Blog .findOneAndDelete({ _id: req.body.postId },(err)=>{

            if (err) {
                return res.json({
                    error:true,
                    msg:"internal error...!"
                })
            }
            res.json({
                error:false,
                msg:"post deleted"
            })
        
    })
              
}