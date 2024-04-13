"use server";
import Exercise from "@/models/Exercise";
import connectDB from "./db";

export const getExercises = async () => {
  try {
    await connectDB();
    const exercises = await Exercise.find({});
    return exercises;
  } catch (error) {
    throw new Error("Failed To Get Exercises " + error);
  }
};

//PEGAR UM UNICO EXERCICIO

export const getSingleExercise = async (id) => {
  try {
    await connectDB();
    const exercise = await Exercise.findById(id);
    return exercise;
  } catch (error) {
    throw new Error("Failed To Get Single Exercises " + error);
  }
};
