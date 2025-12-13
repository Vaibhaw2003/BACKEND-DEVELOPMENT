const express = require("express");
const app = express();

app.set('views engine' , 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended : true }));

app.get('/' , function(req, res){
    res.send("welcom to the server")
});

app.get("/profile" , function(req ,res ){
    res.send("thise is profile page from the server")
});

app.listen(3000);