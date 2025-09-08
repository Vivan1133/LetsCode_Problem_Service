const mongoose = require("mongoose");
const { DB_URL, NODE_ENV } = require("./server-config");

async function connectDB() {

    try {
        await mongoose.connect(DB_URL);
    } catch (error) {
        console.log("unable to connect to db server");
        console.log(error);
    }
}

module.exports = connectDB;