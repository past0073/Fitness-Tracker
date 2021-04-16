const router = require("express").Router();
const { db } = require("../models/workout.js");
const Workout = require("../models/workout.js");

//Using the /api endpoint

//READ all workouts
router.get('/workouts', (req, res) => {
    Workout.find({})
        .then(workouts => {
            res.json(workouts);
        }).catch (err => {
            res.json(err);
        })
});

//CREATE new workout
router.post('/workouts', (req, res) => {
    Workout.create({})
        .then(workout => {
            res.json(workout);
        }).catch (err => {
            res.json(err);
        })
});

//UPDATE a workout by adding an exercise
router.put('/workouts/:id', (req, res) => {
    db.Workout.findByIdAndUpdate(
        req.params.id,
        {
            $push: {
                exercises: req.body,
            }
        },
        { new: true }
    ).then((workout) => {
        res.json(workout);
    }).catch((err) => {
        res.json(err);
    })
})

module.exports = router;
