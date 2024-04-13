import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import DeleteIcon from "../Buttons/DeleteIcon";
import RatingDisplay from "./RatingDisplay";
import { deleteExercise } from "@/lib/action";
import EditIcon from "../Buttons/EditIcon";

const ExerciseCard = ({ exercise }) => {
  return (
    <Card className="max-w-screen-sm">
      <CardHeader>
        <div className="flex w-full justify-between p-4">
          <p className="font-semibold text-xl uppercase">{exercise.name}</p>  
          <div className="flex flex-col gap-2">
            <form action={deleteExercise}>
              <input hidden name="id" defaultValue={exercise.id} />
              <button>
                <DeleteIcon />
              </button>
            </form>
            <Link href={`/dashboard/exercise/${exercise.id}`}>
              <EditIcon />
            </Link>
          </div>  
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <span className="font-bold">Séries</span>
            <span className="font-light">{exercise.duration}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">Repetições</span>
            <span className="font-light">{exercise.repetitions}</span>
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <div className="flex w-full justify-between p-4">
          <RatingDisplay rating={exercise.rating} />
          <span className="inline-block rounded-lg px-4 py-2 text-xs font-semibold text-gray-700 bg-green-300">
            {exercise.mode}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ExerciseCard;
