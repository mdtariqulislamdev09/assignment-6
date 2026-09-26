import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ExerciseCard = ({ exercise }) => {
    return (
        <Link href={`/exercises/${exercise.id}`}>
        
        <div className='border border-[#222630] bg-[#15171D] rounded-4xl'>
            <div>
                <Image src={exercise.image}
                    alt={exercise.name}
                   width={392}
                   height={192}
                   className='rounded-t-2xl'
                />
            </div>
            <div className='p-5'>
                <div className="flex gap-3">
                    {exercise.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-[#C2F800] px-[10px] py-0.5 font-bold"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>
                <h2 className='my-1'>{exercise.name}</h2>
                <p className='my-2'>{exercise.equipment}</p>
                <div className='flex gap-2 my-1 border-t py-3 border-[#20242E]'>
                    <span>{exercise.duration} min</span>
                    <span>{exercise.caloriesBurned} kcal</span>
                    <span>{exercise.rating}</span>
                </div>

            </div>
        </div>
        </Link>
    );
};

export default ExerciseCard;