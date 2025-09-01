const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");


app.get("/" , function(req, res){
    res.send("jay shri ram");
});

app.get("/create" ,async function(req, res){

   let user = await userModel.create({
    username :"harsh rajput",
    email : "rajput@amai.com",
    age : 22
   });

   res.send(user);
});

app.listen(3000);