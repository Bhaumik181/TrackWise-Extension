const Activity =
require("../models/Activity");

const saveActivity =
async (req,res)=>{

    try{

        const domain =
        req.body.domain
        .toLowerCase()
        .trim();

        const seconds =
        Number(req.body.seconds);

        const today =
        new Date()
        .toISOString()
        .split("T")[0];

        const updated =
        await Activity.findOneAndUpdate(

            {
                domain: domain,
                date: today
            },

            {
                $inc: {
                    timeSpent: seconds
                }
            },

            {
                returnDocument: "after",
                upsert: true
            }

        );

        res.status(200)
        .json(updated);

    }
    catch(error){

        console.log(error);

        res.status(500)
        .json({
            message:error.message
        });

    }

};

const getStats =
async(req,res)=>{

    try{

        const data =
        await Activity.find()
        .sort({
            timeSpent:-1
        });

        res.json(data);

    }
    catch(error){

        res.status(500)
        .json({
            message:error.message
        });

    }

};

module.exports = {

    saveActivity,

    getStats

};