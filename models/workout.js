const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        trim: true,
        required: "Please enter a workout type"
    },
    name: {
        type: String,
        trim: true,
        required: "Please enter a workout name"
    },
    duration: {
        type: Number,
        required: "Please enter a workout duration"
    },
    distance: {
        type: Number,
        trim: true
    },
    weight: {
        type: Number,
        trim: true
    },
    sets: {
        type: Number,
        trim: true
    },
    reps: {
        type: Number,
        trim: true
    }
});

// db.workout.aggregate([
//   {
//       $addFields: {
//           totalSets: { $sum: "$sets" },
//           totalReps: { $sum: "$reps" }
//       },
//       $addFields: {
//           totalWeight: { $multiply: ["$weight", "$totalSets", "$totalReps"] }
//       },
//       $addFields: {
//         totalDistance: { $sum: "$distance"}
//       }
//   }
//  ])

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;