'use client'
import React, { useContext } from 'react';
import { ExercisesContext } from '@/context/ExercisesContext'
import { toast } from 'react-toastify';



const TodaysPlanButton = ({ exercise }) => {
    const { todaysPlan, setTodaysPlan } = useContext(ExercisesContext);

    const handleTodaysPlan = () => {
        setTodaysPlan([...todaysPlan, exercise])
        toast.success(`You add "${exercise.name}" in today's plan`);
    }
    return (
       <button onClick={handleTodaysPlan} className='bg-[#CCFF00] text-[#0F1115] rounded-[12px] px-[24px] py-[12px]'>Add to todays plane</button>
    );
}

export default TodaysPlanButton;