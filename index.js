const express = require("express")
const bodyparser =require("body-parser")
const mongoose =require("mongoose");
const expressValidator = require('express-validator');
require('dotenv').config({path:'./.env'});
const helmet = require("helmet");
const path = require("path");
const session = require("express-session");
const app = express(); 


const port = process.env.PORT ||5000;

app.use(bodyparser.urlencoded({extended : false}))
app.use(bodyparser.json());

app.use(helmet());

app.use(expressValidator());
app.use(session({
    secret:require("./setup/connect").TOKEN_KEY,
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge : 3600000 * 24 *7 ,
        secure : process.env.NODE_ENV === 'production'
    }
}))

app.use(express.static("./public"));

app.use("/api/admin",require("./routers/api/auth"));
app.use("/api/admin/blog",require("./routers/api/auth"));

const db =require("./setup/connect").mongodbURL;
const s =async()=>{ 
await mongoose
.connect(db,{ useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true })
.then(()=>console.log("mongodb connceted"))
.catch(err =>console.log(err))
}
s().catch(err => console.log(err))


// app.use(cookieparser());
const ss = process.env.NODE_ENV || "development"
app.get("/",(req,res)=>{
    req.session.user = "vijay"
    res.send(req.session.user);
});


app.listen(port,console.log("server is running.........."));

module.exports=app;