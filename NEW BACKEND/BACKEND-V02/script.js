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

// ----01--[ writeFile ]--------(es ka use file bana ke data store karne ke liye hota hai)
/*
 fs.writeFile("hey.txt", 'my name is vaibhaw singh', function(err){
    if(err){
        console.err(err)
    }else{
        console.log("done")
    }
 })
 */

 //-------02----[ readeFile ]----------(es ka use file me se data ko rede karne ke liye hota hai)
/*
 fs.readFile('hey.txt', function(err){
    if(err){
        console.error(err)
    }else{
        console.log("done")
    }
 })

 */

 //--------03-----[ appendFile ]------------(esh ka use kisi bhi file me re-data add karne ke liye hota hai)
/*

 fs.appendFile("hey.txt", " haey kaise ho brother" , function(err){
    if(err){
        console.error(err)
    }else{
        console.log("done")
    }
 })

 */

 //-----------04----[ rename  ]---(es ka use old file ke name ko change karne ke liye hota hai).
/*
 fs.rename("hey.txt", "hello.txt" , function(err){
    if(err) {
        console.error("err")
    }else{
        console.log("done")
    }
 })

 */
 //-----------05----[ copyFile ]--------(es ka mtlb hai ki data ko ak file me se kisi or file me copy karna).
/*
 fs.copyFile("hello.txt", "./copy/copy.txt", function(err){
    if(err){
        console.error(err.message)
    }else{
        console.log("done")
    }
 })

 */

 //-----------06----[ unlink ]-------(es ka mtlb hai file ko delet karna ).
/* 
fs.unlink("copy" , function(err){
    if(err){
        console.error(err)
    }else{
        console.log("done")
    }
})
*/

//--------07----------[ rmdir ]--------( yah anumati deta hai blanck folder ko delet karne ko ).
/*
fs.rmdir('./new backend/backend-v02/copy' , function(err){
    if(err){
        console.error(err.message)
    }else{
        console.log("done")
    }
})
*/
//(recursive - tru [use kar ke file with data wala folder bhi delet ho jayega])


//---------08----[ createFolder ]-----( with the use of it we crete folder ).
/*
fs.createReadStream("juji.txt")

*/


// ----------[  http / https]----( ye hay rule hai ya protocol hai ).
// http- protocol (yahi protocol hahi ya rule hai jisko follow kare bina aap internet pe naa hi kuchh bhej sakte ho , naa hi kuchh manga skte ho.)

const http = require('http')
const Server = http.createServer( function(req , res){
    res.end("hello my famaliy");
})

Server.listen(3000);