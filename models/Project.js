const mongoose =require("mongoose");
const  Schema = mongoose.Schema;
const projectSchema = new Schema({

    type:{
        type: String,
        require:true
    },
    projectList:[{
        title:{type:String ,require :true},
        description:{type:String ,require :true},
        link:{type:String , default:"#"},
        date:{type:Date , default:Date.now}
    }],
    priority:{type:Number , default:1}
    
    
})

module.exports = project = mongoose.model("posts",projectSchema);