const express =
require("express");

const router =
express.Router();

const {
    saveActivity,
    getStats
}
=
require(
"../controllers/activityController"
);

router.post(
    "/",
    saveActivity
);

router.get(
    "/stats",
    getStats
);

module.exports =
router;