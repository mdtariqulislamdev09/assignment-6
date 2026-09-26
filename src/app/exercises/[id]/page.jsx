import SavedButton from '@/component/exerciseDetails/SavedButton';
import TodaysPlanButton from '@/component/exerciseDetails/TodaysPlanButton';
import Image from 'next/image';
import React from 'react';

const getExercise = async () => {
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/allData.json`);
        const data = await response.json();
        return data;
    }catch(error){
        console.error("Error fetching exercise data:", error);
        return [];
    }
}
    
const ExerciseDetails = async({ params }) => {
    const {id} = await params;
    const exerciseData =await getExercise();
    const exercise = exerciseData.find((exercise)=>{
      return  String(exercise.id)=== String(id)
    })
    if (!exercise) {
        return <div>Exercise not found</div>;
    }
    return (
        <main className='container mx-auto px-4 py-7'>
            <div className='grid gap-8 md:grid-cols-2'>
                <div className='overflow-hidden rounded-2xl'>
                    <Image src={exercise.image}
                        alt={exercise.name}
                        width={588}
                        height={735}
                        className=' w-full'
                    />
                </div>
                <div>
                    <h1 className='font-bold text-2xl mb-2 text-[#FFFFFF]'>BARBELL BENCH PRESS</h1>
                    <p className='font-medium text-[16px] mb-2 text-[#9CA3AF]'>A compound press that builds chest thickness, triceps, and pressing power<br />from a stable bench.</p>
                    <div className='flex gap-1 mb-2'>
                        {exercise.muscleGroups.map((muscle) => (
                            <span key={muscle}
                                className="rounded-full bg-[#C2F800] px-[10px] py-0.5 font-bold"
                            >{muscle}</span>
                        ))}
                    </div>
                    <div className='flex flex-col gap-3 mt-4'>
                        <div className='flex justify-between'>
                        <span>Equipment</span>
                        <span>{exercise.equipment}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Difficulty</span>
                            <span>{exercise.difficulty}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Sets</span>
                            <span>{exercise.sets}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Reps</span>
                            <span>{exercise.reps}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Duration</span>
                            <span>{exercise.duration} min</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>CaloriesBurned</span>
                            <span>{exercise.caloriesBurned} kcal</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Rating</span>
                            <span>{exercise.rating}</span>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h2 className='font-extrabold text-[16px] text-[#FFFFFF]'>INSTRUCTIONS</h2>
                        <ol className='font-medium text-[14px] text-[#D1D5DB]'>
                            {exercise.instructions.map((instruction, ind)=>{
                              return  <li key={ind}>{ind + 1}.{instruction}</li>
                            })}
                        </ol>
                    </div>
                    <div className='mt-6 flex gap-3'>
                        <TodaysPlanButton exercise={exercise}/>
                        <SavedButton exercise={exercise}/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ExerciseDetails;