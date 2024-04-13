import React from "react";
import {
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
} from "@nextui-org/react";
import { addExercise } from "@/lib/action";

const NewExercisePage = () => {
  return (
    <section className="px-4 py-8">
      <Card className="max-w-screen-md mx-auto">
        <CardBody>
          <form
            action={addExercise}
            className="flex flex-col items-center p-4 gap-6"
          >
            <Input
              className="w-full"
              placeholder="Nome do exercício"
              autoComplete="false"
              name="name"
            />
            <div className="flex gap-4 w-full">
              <Input type="number" placeholder="Séries/Minutos" name="duration" />
              <Input type="number" placeholder="Repetições" name="repetitions" />
            </div>
            <select 
              name="type"
              className="w-full p-6 rounded-lg bg-gray-100 dark:bg-gray-700">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <Input type="string" name="mode" placeholder="Exemplo: Quadriceps" />
            <Input type="number" name="rating" placeholder="Avalie esse exercício de 1 a 5" />
            <Textarea name="notes" placeholder="Observações" />
            <Button type="submit" className="bg-primary w-full">
              Salvar
            </Button>
          </form>
        </CardBody>
      </Card>
    </section>
  );
};

export default NewExercisePage;
