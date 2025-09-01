const express = require('express');
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engin", );


app.get("/", function(req, res){
    res.render("index.ejs");
});


app.get("/read", function(req, res){
    res.render("read.ejs");
});

app.listen(3000);