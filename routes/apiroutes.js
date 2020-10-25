var db = require("../models")

module.exports = function(app){
  app.get("/api/workouts", function(req, res) {
    db.workout.find({}).then(function(workoutDB){
        res.json(workoutDB)
      })
  })

  app.put("/api/workouts/:id", function({body, params}, res) {
    db.workout.findByIdAndUpdate(
      params.id,
      {$push: {exercises: body}},
      {new: true}
    ).then(function(workoutDB){
        res.json(workoutDB)
      })
  })

  app.post("/api/workouts", (req, res) => {
    db.workout.create({}).then(function(workoutDB){
        res.json(workoutDB)
      })
  })

  app.get("/api/workouts/range", function(req, res) {
    db.workout.find({}).limit(5).then(function(workoutDB){
        res.json(workoutDB)
      })
  })
}