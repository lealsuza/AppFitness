import ExerciseCard from "@/components/ExerciseCard/ExerciseCard";
import { getExercises } from "@/lib/data";
import React from "react";

const DashboardPage = async () => {
  const exercises = await getExercises();
  

  return (
    <section className="px-4 py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {exercises.length === 0 ? (
          <>
            <p className="text-center font-bold text-3xl">
              Nenhum excercício adicionado
            </p>
          </>
        ) : (
          exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))
        )}
      </div>
    </section>
  );
};

export default DashboardPage;
