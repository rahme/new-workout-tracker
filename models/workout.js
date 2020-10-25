const mongoose = require("mongoose")
const Schema = mongoose.Schema

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  workouts: [
    {type: {
        type: String,
        trim: true
      },name: {
        type: String,
        trim: true
      },duration: {
        type: Number
      },distance: {
        type: Number
      },weight: {
        type: Number
      },reps: {
        type: Number
      },sets: {
        type: Number
      }
    }
  ]
})

workoutSchema.virtual("totalDuration").get(function() {
  return this.workouts.reduce(function(total, exercise){
    return total + exercise.duration}, 0);
})

const workout = mongoose.model("workout", workoutSchema)

module.exports = workout