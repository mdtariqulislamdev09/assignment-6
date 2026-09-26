'use client'
import React, { createContext, useState } from 'react';

export const ExercisesContext = createContext({});

const ExercisesProvider = ({ children }) => {

    const [todaysPlan, setTodaysPlan] = useState([]);
    const [saved, setSaved] = useState([]);

    const sharedData = {
        todaysPlan,
        setTodaysPlan,
        saved,
        setSaved
    };

    return <ExercisesContext.Provider value={sharedData}>
        {children}
    </ExercisesContext.Provider>
};

export default ExercisesProvider;