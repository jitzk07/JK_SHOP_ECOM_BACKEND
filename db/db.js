const mongoose = require("mongoose");

async function dbConnection() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to Database");
    } catch (error) {
        console.log("Error", error);
    }
}

module.exports = dbConnection;