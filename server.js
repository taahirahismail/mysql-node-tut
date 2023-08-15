const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const path = __dirname + '/app/views/';

app.use(express.static(path));

const db = require("./app/models");
db.sequelize.sync({force: true}).then(() => {
    console.log("Drop and re-sync db.");
})
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// simple route
app.get("/", (req, res) => {
    res.sendFile(path + "index.html");
});

require("./app/routes/tutorial.routes.js")(app);

// set port and listen for requests
const port = process.env.port || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});