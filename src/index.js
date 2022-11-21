const express = require("express");

const app = express();

app.set("port", 3000 || process.env.PORT);


app.listen(app.get("port"), ()=>{
    console.log(`Server on port ${app.get("port")}`);
});