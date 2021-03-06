const app = require("express");
const router = app.Router();
const burger = require("../models/burger");

router.get("/", function (req, res) {
    burger.all(function (data) {
        console.log(data);
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log("post pusing " + req.body.burger_name)
    burger.create([
        "burger_name",
    ], [
        req.body.burger_name,
    ], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devour: req.body.devour,
        favorite: req.body.favorite,
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router; 