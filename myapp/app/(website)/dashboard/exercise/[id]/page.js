import React from "react";
import {
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
} from "@nextui-org/react";
import { getSingleExercise } from "@/lib/data";
import { updateExercise } from "@/lib/action";

const SingleExercisePage = async ({ params }) => {
  const { id } = params;
  const exercise = await getSingleExercise(id);

  return (
    <section className="px-4 py-8">
      <Card className="max-w-screen-md mx-auto">
        <CardBody>
          <form
            className="flex flex-col items-center p-4 gap-6"
            action={updateExercise}
          >
            <input type="text" name="id" hidden defaultValue={exercise.id} />
            <Input
              className="w-full"
              defaultValue={exercise.name}
              autoComplete="false"
              name="name"
              id="name"
            />
            <div className="flex gap-4 w-full">
              <Input
                type="number"
                defaultValue={exercise.duration}
                name="duration"
                id="duration"
              />
              <Input
                type="number"
                defaultValue={exercise.repetitions}
                name="repetitions"
                id="repetitions"
              />
            </div>
            <select
              name="type"
              id="type"
              className="w-full p-6 rounded-lg bg-gray-100 dark:bg-gray-700"
              defaultValue={exercise.type}  
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <Input 
              type="string" 
              name="mode" 
              id="mode"
              defaultValue={exercise.mode}  
            />
            <Input
              type="number"
              name="rating"
              id="rating"
              defaultValue={exercise.rating}
            />
            <Textarea name="notes" id="notes" defaultValue={exercise.notes} />
            <Button type="submit" className="bg-primary w-full">
              Salvar mudanças
            </Button>
          </form>
        </CardBody>
      </Card>
    </section>
  );
};

export default SingleExercisePage;
