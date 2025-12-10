// EXPRESS.JS FRAMWORK HAI.

// introduction to framework .
// express js ek npm package hai.

// framework - ak flow me chijo ko rakhana hi framework hai.

// manage everything from reciving the request(req ) and giving the response(res).

// ----------first code of express---------

const express = require('express'); // yaha pe express ki sari power const express me store ho gayi hai.
const app = express(); // or yaha pe const express ki sari power cost app me hai.( or express js ak function hai)

// with  the help of above both line we created routes.

app.get('/', function(req, res){
    res.send("vaibhaw singh from the seerver")
});

app.listen(3000);