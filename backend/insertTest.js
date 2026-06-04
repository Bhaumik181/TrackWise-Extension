require("dotenv").config();

const mongoose = require("mongoose");

async function run() {

    await mongoose.connect(
        process.env.MONGO_URI
    );

    const User = mongoose.model(
        "User",
        new mongoose.Schema({
            name: String
        })
    );

    await User.create({
        name: "Bhaumik"
    });

    console.log("Document Inserted");

    process.exit();
}

run();