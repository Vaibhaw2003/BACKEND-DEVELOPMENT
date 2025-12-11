// --------MASTER EJS, DYNAMIC ROUTING AND PROJECT SETUP-------

// NPM init -y ( chalan hai file me new project ke liye).

//dynamic rauting-----

//how to get data coming from frontent at backend routes.

// sestting up parser for form.

// setting up ejs for ejs pages .

// setting up public static files.

const express = require('express');
const path = require('path');
const app  = express();

app.use(express.json()); // ye wala line blob code ko decode karne ke liye hota hai.
app.use(express.urlencoded({ extended : true})); // ye dono line ko parser bhi kaha jata hai.
app.use(express.static(path.join(__dirname,"public"))), // eshka use valina js ko add karne ke liye hota hai.
app.set('view engine', 'ejs');// eshka use ham ejs page ko view karne ke liye karte hai.


app.get("/", function(req,res){  // eshka use hota hai routs banane ke liye.
    res.render("index"); // ejs views page ka use kar ke ham send ke jagah render use karte hai., or file ka name bhi likhate hai (index).
});

app.get("/profile/:username", function(req, res){// yaha pe /: ke baad dynamic routing ka use huwa hai.
    res.send(`welcom, ${req.params.username}`); //param.username ka use kar ke dynamic routinga ka live user name dikha sakte hai. 
});

app.listen(3000, function(){   // eska use hota hai server ko chalane ke liye.
    console.log('its runnig');
});


//---------- setting up ejs-----------[ <h1> 2 -2 </h1> = 0 ]----

// npm i ejs, setup ejs as a middlewear view engine, "ejs".

// main file me ak folder banan hai view ke name se .

//--------setting up public static files-------

//eshka mtlb valina js use karna.

// app.use(express.static(path.join(__dirname, 'public'))); eska mtlab hai ham path set kaar rahe ahi apne vanila js ka.

// -dirname ka mtlb path of curennt folder or public add karne se public folder tak ka path.

// ye sab karne ke liye path name ka packge required karna hoga.

// const path = require('path');

//---------DYNAMIC ROUTING---------

// ham loge kuchh route dekhate hai ushme ak hi part change hota hai, ushi ko dyanmic routing kahte hai.

// example  --( "/inde.js/:harsh" ) / jo part ko dynamic banana hai ushke age[ : ]ye wala saymbol laya do.

// 


