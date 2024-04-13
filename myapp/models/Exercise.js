import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema({
  name: String,
  duration: Number,
  repetitions: Number,
  rating: Number,
  mode: String,
  notes: String,
  type: String,
});

export default mongoose?.models?.Exercise ||
  mongoose.model("Exercise", ExerciseSchema);
