let express = require("express");
let burger = require("../models/burger");

let router = express.Router();

router.get("/", (req, res) => {
  burger.selectAll(function (data) {
    let hdbrsObj = {
      burgers: data,
    };
    console.log(hdbrsObj);
    res.render("index", hdbrsObj);
  });

  router.post("/api/burgers", (req, res) => {
    console.log( ` .. [POST] adding burger: ${req.body.burger_name} // ${req.body.devoured}` )

    burger.insertOne(
      ["burger_name", "devoured"],
      [req.body.burger_name, req.body.devoured],
      function (result) {
        // Send back the ID of new burger
        res.send({ id: result.insertId });
      }
    );
    setTimeout( function(){ res.send({ message: "Added burger" }), 300 });
  });

  router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;

    burger.updateOne({ devoured: req.body.devoured }, condition, 
      function( result ) {
      if (result.changedRows === 0) {
        return res.status(404).send({ message: 'Burger not found'});
      } else {
        res.status(200).send({ message: 'Burger devoured!'});
      }
    });
  });
  router.delete("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;
    console.log("deleted burger")
    burger.deleteOne(condition, (result) => {
      // deleted
      res.status(200).send({ message: 'Burger deleted'});
    });
  });
});
module.exports = router;