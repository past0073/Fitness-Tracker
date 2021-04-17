const router = require("express").Router();
const Workout = require("../models/workout.js");

//Using the /api endpoint

//READ all workouts
router.get('/api/workouts', (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: { $sum: "$exercises.duration" }
        }
    }])
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

//UPDATE a workout by adding an exercise
router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(
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
