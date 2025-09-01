const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const path = require("path");
const userModel = require("./models/user");
const bcryt =require("bcrypt");
const jwt = require("jsonwebtoken");


app.set("view engine" ,"ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());


app.get("/",  function(req ,res ){
    res.render("index.ejs");
});

app.post("/create",function(req ,res ){
    let {username,email,age, password} = req.body;

    bcryt.genSalt(10, function(err, salt){
        bcryt.hash(password, salt ,async function (err, hash){
            let createdUser = await userModel.create({
             username ,
             email,
             password : hash ,
             age

             });

        let token = jwt.sign({email}, 'ledha');
        res.cookie("token", token);
        res.send(createdUser);
        })
    });
}); 

app.get('/login', function(req,res){
    req.render("login");
})

app.post('/login',async function(req, res){
    let user =  await userModel.findOne({email:req.body.email});
    console.log(user);
})

app.get('/logout', function(req, res){
    res.cookie("token","");
    res.redirect("/");
})

app.listen(3000);
