const express = require('express');
const app = express();
const usereModel = require('./usermodel');

app.get("/", function(req, res){
    res.send("heww");
})

app.get("/create",async function(req, res){
   let createduser = await usereModel.create({
    name :"satyam singh",
    email :"vaibhaw@gamil.com",
    username :" satyam singh"
   });
});

app.get("/delete",async function(req, res){
   let user = await usereModel.findOneAndDelete({username :"satyam" });
   res.send(user);
});

app.listen(3000);