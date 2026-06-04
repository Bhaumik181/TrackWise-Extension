require("dotenv").config();

const express =
require("express");

const cors =
require("cors");

const mongoose =
require("mongoose");

const activityRoutes =
require("./routes/activityRoutes");

const app =
express();

app.use(cors());

app.use(express.json());

app.use(
    "/api/activity",
    activityRoutes
);

app.get("/",(req,res)=>{

    res.send(
        "Backend Working"
    );

});

async function startServer(){

    try{

        await mongoose.connect(
            process.env.MONGO_URI
        );

        console.log(
            "MongoDB Connected"
        );

        app.listen(
            process.env.PORT || 5000,
            ()=>{

                console.log(
                    "Server Running"
                );

            }
        );

    }
    catch(error){

        console.log(error);

    }

}

startServer();