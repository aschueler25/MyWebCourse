const express = require('express');
const config = require('./config.json');
const path = require('path');

let app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(require("./routes/index.js"));

app.listen(config.port, () => {
    console.log(`Listening on http://localhost:${config.port}`);

    console.log(`About route on http://localhost:${config.port}/about`);

    console.log(`Class route on http://localhost:${config.port}/class`);

    console.log(`Weather route on http://localhost:${config.port}/weather`);

});