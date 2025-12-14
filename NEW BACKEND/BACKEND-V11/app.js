// mogodb installing , mongodb connection , schema , model , crud.
//mongoose -- use for comunicate for two server node and dbms.
// odm --- object document model.

const express = require("express");
const app = express();

const userModel = require('./usermodel');

app.get("/" , function(req , res ){
    res.send("vaibhaw singh")
});

// thise is create rotes.-------
app.get("/create" , async function(req , res ){
   let craeted =  await userModel.create({
        name : "juji singh",
        email : "juji@gmail.com",
        usename : "cc video "
    })
    res.send(craeted);
});

// thise is update routes.-------
app.get("/update" ,async function(req , res ){
    let userupdate = await userModel.findOneAndUpdate({name : "juji singh"} , { name : "harsh singh"}, { new : true});  // dono me name same hona chahiye but name ka value cahnge hona chahiye.
    res.send(userupdate);
});

// thise is reade routes---------
app.get("/read" ,async function(req , res ){
  let reade =  await userModel.find();
  res.send(reade);
});

// thise is delete routes--------
app.get("/delete" ,async function(req , res ){
    let userdelete = await userModel.findOneAndDelete({name : "harsh singh"});
    res.send(userdelete)
    
});

app.listen(3000);
