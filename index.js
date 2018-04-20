const express = require('express');
const add = express();

add.get('*', (req, res, next)=>{

    res.send("404 PÁGINA NO ENCONTRADA :(");
    next();

});

add.get(('/persona', (req, res) => {

}));

add.listen(3000);