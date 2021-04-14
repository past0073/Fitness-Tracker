const router = require("express").Router();
const Workout = require("../models/workout.js");

//READ all workouts
router.get('/api/workouts', (req, res) => {
    Workout.find({})
        .then(workouts => {
            res.json(workouts);
        }).catch (err => {
            res.json(err);
        })
});

//CREATE new workout
router.post('/api/workouts', (req, res) => {
    Workout.create({})
        .then(workout => {
            res.json(workout);
        }).catch (err => {
            res.json(err);
        })
});

//UPDATE a workout

module.exports = router;
