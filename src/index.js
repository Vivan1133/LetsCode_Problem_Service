const express = require("express");
const { PORT } = require("../src/config/server-config");
const bodyparser = require("body-parser");

const app = express();

app.get("/ping", (req, res) => {
    return res.json({
        message: "problem service is alive"
    })
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.text());

app.listen(PORT, () => {
    console.log(`server started at port: ${PORT}`);
})