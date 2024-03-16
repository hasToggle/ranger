"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

let renderCount = 0;

export default function StateLesson() {
  const [emotionalState, setEmotionalState] = useState("Optimistic");
  const [pendingState, setPendingState] = useState();

  const states = [
    {
      label: "Ecstatic",
      description: "Just found a charging station in the middle of nowhere.",
    },
    {
      label: "Optimistic",
      description:
        "I've got half a battery left and only a quarter of the journey to go.",
    },
    {
      label: "Mild Panic",
      description: "Why did I trust the GPS to take this detour?",
    },
    {
      label: "Existential Angst",
      description: "Does my SUV even exist? Is it all just a simulation?",
    },
    {
      label: "Range Anxiety",
      description: "Battery at 5%. Nearest charging station: 50 miles.",
    },
    {
      label: "Desperation",
      description:
        "Contemplating whether AAA will come out to the desert with an extension cord.",
    },
    { label: "Acceptance", description: "Time to set up camp by the highway." },
  ];

  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <SectionHeader />
      </div>
      <section className="my-8 text-center">
        <h2 className="text-2xl font-bold my-4 text-black">
          7 stages of our customer journey
        </h2>
        <div>
          {states.map((state, idx) => (
            <button
              key={idx}
              className={`p-4 m-2 rounded-md ${
                emotionalState === state.label
                  ? "bg-sky-600 text-white"
                  : "bg-slate-700"
              }`}
              onClick={() => {
                setPendingState(state.label);
                setTimeout(() => {
                  setEmotionalState(state.label);
                  setPendingState(null);
                  renderCount++;
                }, 2000);
              }}
            >
              {state.label}
            </button>
          ))}
        </div>
      </section>

      <section className="text-center p-8 text-black">
        <p className="pb-8">The site has been rendered {renderCount} times.</p>
        {pendingState ? (
          <p className="text-lg">Updating state to: {pendingState}...</p>
        ) : (
          <p className="text-lg">
            {states.find((s) => s.label === emotionalState)?.description}
          </p>
        )}
      </section>
    </div>
  );
}
