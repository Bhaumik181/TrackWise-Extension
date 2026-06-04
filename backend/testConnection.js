require("dotenv").config();

const mongoose = require("mongoose");

async function testConnection() {
    try {
        await mongoose.connect(
            process.env.MONGO_URI
        );

        console.log(
            "✅ MongoDB Connected Successfully"
        );

        process.exit(0);

    } catch (error) {

        console.log(
            "❌ Connection Failed"
        );

        console.log(error.message);

        process.exit(1);
    }
}

testConnection();