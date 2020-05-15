const Blog = require("../models/Bolg")
exports.create = async(req,res) =>{

    const {title ,content} = req.body;

    let page = new blog({
        title:title,
        content:content
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

}