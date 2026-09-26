"use client";

import React, { useContext, useState } from "react";
import ExerciseCard from "@/components/ExerciseCard";
import { ExercisesContext } from "@/context/ExercisesContext";

const MyPlan = () => {
  const { saved, plan } = useContext(ExercisesContext);

  const [sortBy, setSortBy] = useState("duration");

  const sortExercises = (exercises) => {
    const sortedExercises = [...exercises];

    if (sortBy === "duration") {
      sortedExercises.sort((a, b) => a.duration - b.duration);
    }

    if (sortBy === "calories") {
      sortedExercises.sort(
        (a, b) => b.caloriesBurned - a.caloriesBurned
      );
    }

    if (sortBy === "rating") {
      sortedExercises.sort((a, b) => b.rating - a.rating);
    }

    return sortedExercises;
  };

  const sortedPlan = sortExercises(plan);
  const sortedSaved = sortExercises(saved);

  return (
    <main className="min-h-screen bg-[#090A0D] text-white">
      <div className="container mx-auto px-5 py-10">
        <div>
          <h1 className="text-4xl font-extrabold uppercase">
            MY PLAN
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Take it one step at a time. Plan smart, train hard, feel great.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-3 border-b border-[#222630] pb-10">

          <div>
            <p className="text-xs text-gray-500">
              EXERCISES
            </p>

            <p className="mt-2 text-4xl font-extrabold text-[#C2F800]">
              {plan.length}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">
              MINUTES
            </p>

            <p className="mt-2 text-4xl font-extrabold">
              {plan.reduce(
                (total, exercise) => total + exercise.duration,
                0
              )}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">
              CALORIES
            </p>

            <p className="mt-2 text-4xl font-extrabold">
              {plan.reduce(
                (total, exercise) =>
                  total + exercise.caloriesBurned,
                0
              )}
            </p>
          </div>

        </div>
        <div className="my-6 flex justify-end">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg border border-[#222630] bg-[#15171D] px-4 py-2 text-sm text-white outline-none"
          >
            <option value="duration">
              Duration
            </option>

            <option value="calories">
              Calories
            </option>

            <option value="rating">
              Rating
            </option>
          </select>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {sortedPlan.length > 0 ? (
            sortedPlan.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
              />
            ))
          ) : (
            <div className="col-span-full flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-[#222630] bg-[#111318]">

              <h2 className="text-2xl font-extrabold">
                NOTHING HERE YET
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Add exercises to your plan.
              </p>

            </div>
          )}

        </div>

      </div>
    </main>
  );
};

export default MyPlan;