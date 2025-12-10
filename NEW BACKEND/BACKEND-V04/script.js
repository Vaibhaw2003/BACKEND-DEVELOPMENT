// EXPRESS.JS FRAMWORK HAI.

// introduction to framework .
// express js ek npm package hai.

// framework - ak flow me chijo ko rakhana hi framework hai.

// manage everything from reciving the request(req ) and giving the response(res).

// ----------first code of express---------

const { error } = require('console');
const express = require('express'); // yaha pe express ki sari power const express me store ho gayi hai.
const app = express(); // or yaha pe const express ki sari power cost app me hai.( or express js ak function hai)

// with  the help of above both line we created routes. [ example - sheriyans.com/profile in thise line / ke bad wala sab routes hai or useke pahle wala domain hai.]
app.use(function(req,res, next ){  // thise is middleware ( app.use in thise case 3 things is most imp req,res,next / or ya routs ke pahle chalta hai )
    console.log("middleweare");
    next(); // ( if ham loge next nhi use karenge to kaam hone ke bad age nhi chalega / it is use for requst ko age forward karne ke liye )
 });

// ---------rauting------------
app.get('/', function(req, res){  //  [ / it means routd yah page craete karne ke liye hota hai]
    res.send("vaibhaw singh from the seerver")
});  // eshka mtlb hai ki koi / pe jayega to ushke name show hoga.


app.get('/profile', function(req, res){
    res.send("thise is profile page") // yaha pe response send kar raha hu server se .
});

app.listen(3000);// server and port likhna imp hai.


// install nodemone package for live server changes dekhne ke liye .
// ( npm i nodemon -g ) package name .[ es ko use karne ke liye npx nodemone script.js /ya npx nodemone start likhna hai.]

//--------middlewares ----------

// middlewears routs ke pahle lagta hai ( eshka mtlb hota hai ki koii bhi requst send kiya apne server se wo middleware ke through routs ke pas jayega or or response ko send karaga dobara .)

// ham koii bhi kam routs ke chalane se pahle hi kar sakte hai , middleware pe . 
 //app.use(function(req,res, next ){
   // console.log("middleweare");
   //next();
 //})

 //------------REQUEST AND RESPONSE HANDLING-------
 // frontent---- backend ---frontent

 // frontend pe jawo koii bhi routes open karo jisme backend add nhi ho fir backend add karo / bana ke.
 // backend pe jake ushi name se backend banawo or koii bhi res send karo frontend pe. 

 // example - 

 //app.get("/about" , function(req ,res){
   // res.send("thise is about section from the server ")
 //})

//-----error handling----------

app.get("/pro", function(req, res ,next){
    return next(new Error("somthing went wrong")) // or ye wala part backend pe show hoga
});


app.use((err, req, res, next) =>{
    console.error(err.stack)
    res.status(500).send('somthing is broken!')  // ye wala part prontent pe show hoga 
});