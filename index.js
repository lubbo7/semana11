const express = require('express');
const add = express();
const fs = require('fs');
var html = fs.readFileSync("./home.html");
var carpeta = fs.readFileSync("./personas/personaDos");

add.get('*', (req, res)=>{
    res.write(html);   
    res.end(); 
});

add.get(('/personas', (req, res) => {
    
}));

add.listen(3000);