//-------------DAY----07/12/2025------------


// 1. NODE JS BASIC.-------------

// js se direct backend nhi ban sakta , es liye hane node kause karte hai .
//node j.s  hame environment provide karata hai crome ke v8 eingen se communicate kaane me.
//node js ke bina js se backenda banaana possible nhi hai.

// npm - yah ak jagah hai jaha loge apne code ko uplode karte hai ,or koii bhi use kar skta ha.
// yah ak storage of code hai, kya package.

// create package json file -[  npm init -y(ye lekha jokha hota hai project ka ) ].

// npm ke jis bhi package use karna hai use [ require karna hota hai].

//-------------( o1 )----------[  FILE SYSTEAM   ]--------------//

const fs = require('fs'); //npm ka koii bhi package use karne ke liye use requore karna hoga.

// ----01--[ writeFile ]--------
/*
 fs.writeFile("hey.txt", 'my name is vaibhaw singh', function(err){
    if(err){
        console.err(err)
    }else{
        console.log("done")
    }
 })
 */

 //-------02----[ readeFile ]----------
/*
 fs.readFile('hey.txt', function(err){
    if(err){
        console.error(err)
    }else{
        console.log("done")
    }
 })

 */

 //--------03-----[ appendFile ]------------

 fs.appendFile("hey.txt", " haey kaise ho brother" , function(err){
    if(err){
        console.error(err)
    }else{
        console.log("done")
    }
 })


