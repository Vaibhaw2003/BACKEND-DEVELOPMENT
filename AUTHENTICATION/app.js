//const cookieParser = require('cookie-parser');
const express = require("express");
const app = express();
const path = require("path");
const bcrypt = require('bcrypt');
const { JsonWebTokenError } = require("jsonwebtoken");


//app.use(cookieParser());
//app.set("view engin","ejs");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
//app.use(express.static(path.join(__dirname, "public")))

//app.get('/', function(req ,res){
    //bcrypt.genSalt(10, function(err, salt) {
    //bcrypt.hash("pololo", salt, function(err, hash) {
       // console.log(hash);
    //});
//});
//});

//app.get('/read', function(req ,res){
   // console.log(req.cookies);
   // res.send("read the page");
//});

/* app.get('/', function(req ,res){
    bcrypt.compare("pololo","$2b$10$TcUEOW.BNgfljaDf385F1.wmiPqHomq2tcFP.Wo2RrJ8EMtW6vGi2", hash, function(err, res) {
    console.log(result);
});
});  */

app.get('/', function(req ,res){
   let token = jwt.sign({email: "harshsingh@gmail.com"} , "secret") 
   console.loge(token);
});

app.listen(3000);
