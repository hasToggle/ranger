"use client";
import Image from "next/image";
import Hero from "app/components/Hero";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Feature from "./components/Feature";
import { useState } from "react";

export default function Home() {
  const [emotionalState, setEmotionalState] = useState("Optimistic");

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
    <main className="bg-white">
      <Hero />
      <Feature />
      <Stats />

      {/*  <Header
        title="Almost-There 500"
        description="For those who ponder the meaning of life in traffic. Features include a philosophical GPS voice that asks, Where are we really going?"
      /> */}

      <section className="my-8 text-center border-t-2">
        <h2 className="text-2xl font-bold my-4 text-black">How are you feeling today?</h2>
        <div>
          {states.map((state, idx) => (
            <button
              key={idx}
              className={`p-4 m-2 rounded-md ${
                emotionalState === state.label
                  ? "bg-sky-600 text-white"
                  : "bg-slate-700"
              }`}
              onClick={() => setEmotionalState(state.label)}
            >
              {state.label}
            </button>
          ))}
        </div>
      </section>

      <section className="text-center p-8">
        <p className="text-lg text-black">
          {states.find((s) => s.label === emotionalState)?.description}
        </p>
      </section>

      <footer className="mt-16 text-center">
        <p>Drive Safe. Charge often. And remember, range is just a number.</p>
      </footer>
    </main>
  );
}
