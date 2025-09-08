const express = require("express");
const { PORT } = require("../src/config/server-config");
const bodyparser = require("body-parser");
const apiRoutes = require("./routes/index");
const errorHandler = require("./utils/errorHandler");
const connectDB = require("./config/db.config");

const app = express();

app.get("/ping", (req, res) => {
    return res.json({
        message: "problem service is alive"
    })
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.text());

app.use("/api", apiRoutes);


// last middleware, if any error occurs
app.use(errorHandler);

const startServer = async () => {
    try {
        await connectDB();
        console.log("Successfully connected to DB ✅");

        app.listen(PORT, () => {
            console.log(`Server started at port: ${PORT}`);
        });
    } catch (err) {
        console.error("Failed to connect to DB ❌");
        console.error(err);
        process.exit(1);
    }
};

startServer();