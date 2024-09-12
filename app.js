const express = require('express')
const app = express()
const {connectionDB} = require('./DBconnection')
connectionDB();
const PORT = 3000;
require("./models/index")
app.listen(PORT, () => {
    console.log(`Server running at express://localhost:${PORT}/`);
});
