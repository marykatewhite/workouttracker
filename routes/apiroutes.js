const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", function(req, res) {
  Workout.find({})
    .then(function(workouts) {
      console.log(workouts);
      res.json(workouts);
    })
    .catch(function(err) {
      console.log(err);
    });
});

router.post("/api/workouts", function(req, res) {
  Workout.create({})
    .then(function(workouts) {
      res.json(workouts);
    })
    .catch(function(err) {
      console.log(err);
    });
});

router.put("/api/workouts/:id", function(req, res) {
  console.log(req.body);
  Workout.where("_id", req.params.id)
    .update({ $push: { exercises: req.body } })
    .then(function(results) {
      res.json(results);
    })
    .catch(function(err) {
      console.log(err);
    });
});

router.get("/api/workouts/range", function(req, res) {
  Workout.find({})
    .then(function(workouts) {
      res.json(workouts);
    })
    .catch(function(err) {
      console.log(err);
    });
});

module.exports = router;
