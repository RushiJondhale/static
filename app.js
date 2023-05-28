const express = require('express') ;

const app = express() ;
const port = 3000 ;

app.use(express.static('public')) ;

app.listen(3000,()=>
{
    console.log('Sever is Started')
})
// npm init
// npm install express --save
// node app.js