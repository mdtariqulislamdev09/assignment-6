"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const PlanePage = () => {
    const [activeTab, setActiveTab] = useState("My Plans");

    const [savedExercises, setSavedExercises] = useState([]);
    const [planExercises, setPlanExercises] = useState([]);

    useEffect(() => {
        const getExercise = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/allData.json`);
                const data = await response.json();

                setSavedExercises(data);
            } catch (error) {
                console.log("Error fetching exercises:", error);
            }
        };

        getExercise();
    }, []);

    const addExercise = (exercise) => {
        setPlanExercises((prev) => {
            const alreadyExists = prev.some(
                (item) => item.id === exercise.id
            );

            if (alreadyExists) {
                return prev;
            }

            return [...prev, exercise];
        });
    };

    const removeExercise = (id) => {
        setPlanExercises((prev) =>
            prev.filter((exercise) => exercise.id !== id)
        );
    };

    const totalDuration = planExercises.reduce(
        (total, exercise) => total + exercise.duration,
        0
    );

    const totalCalories = planExercises.reduce(
        (total, exercise) => total + exercise.caloriesBurned,
        0
    );

    return (
        <main className="min-h-screen bg-[#090A0D] text-white">
            <div className="mx-auto max-w-6xl px-4 py-8">

                <div className="mb-6">
                    <p className="text-[11px] font-bold uppercase text-[#C2F800]">
                        FITLOG
                    </p>

                    <h1 className="mt-1 text-2xl font-extrabold">
                        Workout Plan
                    </h1>

                    <p className="mt-1 text-sm text-[#8D929C]">
                        Build and manage your workout plan
                    </p>
                </div>

                <div className="mb-5 grid grid-cols-3 overflow-hidden rounded-xl border border-[#222630] bg-[#111318]">

                    <div className="border-r border-[#222630] px-4 py-4">
                        <p className="text-xs text-[#8D929C]">
                            EXERCISES
                        </p>

                        <p className="mt-1 text-xl font-bold text-[#C2F800]">
                            {planExercises.length}
                        </p>
                    </div>

                    <div className="border-r border-[#222630] px-4 py-4">
                        <p className="text-xs text-[#8D929C]">
                            MINUTES
                        </p>

                        <p className="mt-1 text-xl font-bold">
                            {totalDuration}
                        </p>
                    </div>

                    <div className="px-4 py-4">
                        <p className="text-xs text-[#8D929C]">
                            CALORIES
                        </p>

                        <p className="mt-1 text-xl font-bold">
                            {totalCalories}
                        </p>
                    </div>

                </div>

                <div className="mb-4 flex border-b border-[#222630]">

                    {["My Plans", "Saved"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-3 text-sm font-bold transition ${
                                activeTab === tab
                                    ? "border-b-2 border-[#C2F800] text-[#C2F800]"
                                    : "text-[#8D929C]"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}

                </div>

                {activeTab === "My Plans" && (
                    <section className="rounded-xl border border-[#222630] bg-[#111318] p-5">

                        {planExercises.length === 0 ? (

                            <div className="flex min-h-[250px] flex-col items-center justify-center text-center">

                                <p className="text-sm font-bold">
                                    YOUR PLAN IS EMPTY
                                </p>

                                <p className="mt-2 max-w-sm text-xs text-[#8D929C]">
                                    Add exercises from your saved exercises
                                    to create your workout plan.
                                </p>

                                <button
                                    onClick={() => setActiveTab("Saved")}
                                    className="mt-5 rounded-full bg-[#C2F800] px-5 py-2 text-xs font-extrabold text-black"
                                >
                                    ADD EXERCISE
                                </button>

                            </div>

                        ) : (

                            <div>

                                <div className="mb-4 flex items-center justify-between">

                                    <div>
                                        <h2 className="text-lg font-extrabold">
                                            MY WORKOUT
                                        </h2>

                                        <p className="text-xs text-[#8D929C]">
                                            {planExercises.length} exercises •{" "}
                                            {totalDuration} minutes •{" "}
                                            {totalCalories} calories
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => setActiveTab("Saved")}
                                        className="rounded-full bg-[#C2F800] px-4 py-2 text-xs font-bold text-black"
                                    >
                                        + ADD
                                    </button>

                                </div>

                                <div className="space-y-3">

                                    {planExercises.map((exercise) => (
                                        <div
                                            key={exercise.id}
                                            className="flex items-center gap-3 rounded-lg border border-[#222630] bg-[#15171D] p-3"
                                        >

                                            <Image
                                                src={exercise.image}
                                                alt={exercise.name}
                                                width={70}
                                                height={55}
                                                className="h-14 w-16 rounded-md object-cover"
                                            />

                                            <div className="flex-1">

                                                <h3 className="text-sm font-bold">
                                                    {exercise.name}
                                                </h3>

                                                <p className="mt-1 text-xs text-[#8D929C]">
                                                    {exercise.muscleGroups.join(
                                                        " • "
                                                    )}
                                                </p>

                                                <p className="mt-1 text-xs text-[#8D929C]">
                                                    {exercise.sets} sets •{" "}
                                                    {exercise.reps} reps •{" "}
                                                    {exercise.duration} min
                                                </p>

                                            </div>

                                            <button
                                                onClick={() =>
                                                    removeExercise(exercise.id)
                                                }
                                                className="text-xs font-bold text-[#8D929C] hover:text-red-400"
                                            >
                                                REMOVE
                                            </button>

                                        </div>
                                    ))}

                                </div>

                            </div>
                        )}

                    </section>
                )}

                {activeTab === "Saved" && (
                    <section>

                        <div className="mb-4">
                            <h2 className="text-lg font-extrabold">
                                SAVED EXERCISES
                            </h2>

                            <p className="text-xs text-[#8D929C]">
                                Add your saved exercises to your workout plan
                            </p>
                        </div>

                        <div className="space-y-3">

                            {savedExercises.map((exercise) => {

                                const alreadyAdded = planExercises.some(
                                    (item) => item.id === exercise.id
                                );

                                return (
                                    <div
                                        key={exercise.id}
                                        className="flex items-center gap-3 rounded-lg border border-[#222630] bg-[#15171D] p-3"
                                    >

                                        <Image
                                            src={exercise.image}
                                            alt={exercise.name}
                                            width={70}
                                            height={55}
                                            className="h-14 w-16 rounded-md object-cover"
                                        />

                                        <div className="flex-1">

                                            <h3 className="text-sm font-bold">
                                                {exercise.name}
                                            </h3>

                                            <p className="mt-1 text-xs text-[#8D929C]">
                                                {exercise.muscleGroups.join(
                                                    " • "
                                                )}
                                            </p>

                                            <p className="mt-1 text-xs text-[#8D929C]">
                                                {exercise.sets} sets •{" "}
                                                {exercise.reps} reps •{" "}
                                                {exercise.duration} min
                                            </p>

                                        </div>

                                        <button
                                            disabled={alreadyAdded}
                                            onClick={() =>
                                                addExercise(exercise)
                                            }
                                            className={`rounded-full px-4 py-2 text-xs font-extrabold ${
                                                alreadyAdded
                                                    ? "cursor-not-allowed bg-[#25282F] text-[#777B84]"
                                                    : "bg-[#C2F800] text-black hover:bg-[#d5ff3b]"
                                            }`}
                                        >
                                            {alreadyAdded
                                                ? "ADDED"
                                                : "ADD"}
                                        </button>

                                    </div>
                                );
                            })}

                        </div>

                    </section>
                )}

            </div>
        </main>
    );
};

export default PlanePage;