import ExerciseCard from '@/component/shared/ExerciseCard';
import React from 'react';


const getExercise = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/allData.json`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching exercise data:", error);
        return [];
    }
}
const Exercises = async () => {
    const exerciseData = await getExercise();
    return (
        <section className="container mx-auto my-[70px] px-4">

            <h2 className='mb-6 text-3xl font-bold'>Explore all Exercise</h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {exerciseData.map((exercise, ind) => {
                    return <ExerciseCard key={ind} exercise={exercise} />;
                })}
            </div>
        </section>
    );
};

export default Exercises;