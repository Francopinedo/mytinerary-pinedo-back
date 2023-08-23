const express = require('express');
const router = require('./router/router');
const conectDB = require("./config/db")
const app = express();

app.use("/api",router);
conectDB();
app.listen (3000,() => {
    console.log("listening on port 3000")
})