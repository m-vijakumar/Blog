

const Comment = require("../models/Comments");

exports.getvalidate = (req,res,next)=>{

    req.assert("message", "message cannot be empty").notEmpty();

    req.getValidationResult(req,res,next)
    .then(async(result)=>{
        if(!result.isEmpty()){
           console.log( result.array()[0].msg)
           console.log("WQWEWWQ");
            return res.json({
                error : true,
                msg : result.array()[0].msg
            })
        }
        next();
    });
};


exports.addmessage = async(req,res)=>{

    let data ={
        name:req.body.name,
        message:req.body.message

    }
    let sub = new Comment(data);
            sub.save()
            .then((result)=>{
                console.log("FFFFFF");
                 return res.json({
                     error:false,
                     msg : "Thank you For Your Feedback...",

                 })
            })
            .catch((err)=>{
                console.log("GGGGGG");
                return res.json({
                    error:true,
                    msg : "Internal Error...",
                })
            })

}

exports.getfeeback = async(req,res)=>{

    await Comment.find({}).sort({date: -1})
    // Comment.find({})
    .then((result)=>{
        // console.log(result)
        res.json({
            error:false,
            feedbacks:result
        })
    })
    .catch((err)=>{
        console.log(err)
        res.json({
            error:true,
            msg:err
        })
    })
}

exports.deletefeedback = async(req,res)=>{

    await Comment.findOneAndDelete({_id :req.body.commentId })
        .then((result)=>{
            res.json({
                error:false,
                msg:"feedback deleted"
            });
        })
        .catch((err)=>{
            console.log(err)
            res.json({
                
                error:true,
                msg:err
            })
        })
}