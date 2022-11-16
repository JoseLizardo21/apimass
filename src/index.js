const express = require('express');
const path = require('path');

//initialitation
const app = express();


//setting 
app.set("port", 3000 || process.env.PORT);

//midlewars
app.use(express.urlencoded({extended: false}));
app.use(express.json)

//Routes
app.use(require('./routes'));

app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});