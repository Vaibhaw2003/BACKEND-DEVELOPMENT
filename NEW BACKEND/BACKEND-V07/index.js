const express = require("express");
const path = require("node:path");
const app = express();
const fs = require("fs"); // file handling me use hota hai curde operation.

app.use(express.json());
app.set('view engine', 'ejs');// eshame app .set ka use hota hai views wala folder ko cahlane ke liye ./ spelling error nhi hona chahiye or ejs install ho. 
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, "public")))// ye use hota hai path dene ke liye public file ke liye.

app.get('/', function(req, res){
    fs.readdir(`./files`, function(err, files){
       //console.log(files);
       res.render("index", {files : files}) // we use rendar because of we use views engine , ejs.
       });
    });


    app.post('/create', function(req, res){
        fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
            res.redirect("/")
        })

    })
    

app.listen(3000);

