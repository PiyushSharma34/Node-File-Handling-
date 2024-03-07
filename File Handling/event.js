

const express = require("express");
const { appendFile } = require("fs"); // Corrected the import for appendFile
const app = express();

app.get("/", (req, res) => {
    res.send("Api called");
});

app.get("/edit", (req, res) => {
    res.send("Api Edit");
});

app.get("/delete", (req, res) => {
    res.send("Api delete");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
