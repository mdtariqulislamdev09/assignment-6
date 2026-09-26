'use client'

import { ExercisesContext } from '@/context/ExercisesContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';


const SavedButton = ({ exercise }) => {
    const { saved, setSaved } = useContext(ExercisesContext);

    const handleSaved = () => {
        setSaved([...saved, exercise])
        toast.success(`You Saved "${exercise.name}"`)
    }
    return (
       <button onClick={handleSaved} className='rounded-[12px] px-[24px] py-[12px]'>Save for later</button>
    );
}

export default SavedButton;