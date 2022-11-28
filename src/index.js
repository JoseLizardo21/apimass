const express = require('express');
const path = require('path');

//initialitation
const app = express();
require('dotenv').config();

//setting 
app.set("port", process.env.PORT || 3000);

//midlewars
app.use(express.urlencoded({extended: false}));
app.use(express.json());
require('./database');

//Routes
app.get('/users/Jose/repos', (req,res)=>{
    res.json([
        {id: 1, name: "Jose"},
        {id: 2, name: "Lizardo"},
        {id: 3, name: "Rosales"},
        {id: 4, name: "Anuel"},
        {id: 5, name: "Ricardo"},
        {id: 6, name: "Manuel"}
    ]);
});

app.post('/env', (req, res)=>{
    res.json({id: 1, name: "Jose"})
    console.log(req.body);
});

app.use('/api', require('./routes'));

app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});