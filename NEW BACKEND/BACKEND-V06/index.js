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

app.use(express.json());
app.use(express.urlencoded({ extended : true}));
