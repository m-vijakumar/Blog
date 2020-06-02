const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({

        name:{type :String ,required :false},
        message:{type:String ,require:true},
        date:{type:Date , default:Date.now(),required:true}
})



module.exports = comments = mongoose.model('comments',commentSchema)