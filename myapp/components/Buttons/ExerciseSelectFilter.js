import React, { useState } from 'react';
import {Select, SelectItem} from "@nextui-org/react";
import { getExercises } from '@/lib/data';


const ExerciseFilter = async () => {
  const exercises = await getExercises();

  const [selectedType, setSelectedType] = useState('A');
  const handleSelectChange = (event) => {
    setSelectedType(event.target.value);
  };

  return(
    <Select value={selectedType} onChange={handleSelectChange}
        className="max-w-xs" 
      >
        {exercises.map((exercise) => (
          <SelectItem key={exercise.type} value={exercise.type}>
            {exercise.label}
          </SelectItem>
        ))}
      </Select>
  )
}

export default ExerciseFilter