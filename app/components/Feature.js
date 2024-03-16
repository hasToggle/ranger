"use client";

import {
  MapPinIcon,
  TruckIcon,
  Battery50Icon,
  MicrophoneIcon,
  RocketLaunchIcon,
  SunIcon,
} from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import Toggle from "./Toggle";
import Divider from "./Divider";
import Breadcrumb from "./Breadcrumb";
import EmptyState from "./EmptyState";

const features = [
  {
    name: "Roll-The-Dice Drive Mode.",
    description:
      "Can't decide if you should take the scenic route or the highway? Just hit the 'Roll' button, and the SUV will randomly choose your driving mode. Eco, Sport, or the secret third option: Tortoise.",
    icon: TruckIcon,
  },
  {
    name: "Schrodinger's GPS.",
    description:
      "Is your destination on the left? Right? Straight ahead? This GPS won't tell you until you've passed it. Dive deep into quantum mechanics every drive. You're both lost and found until you check!",
    icon: MapPinIcon,
  },
  {
    name: "Russian Roulette Charging Ports.",
    description:
      "With six charging ports, one randomly provides super-fast charging. The others? Well, they might just power a tiny light bulb.",
    icon: Battery50Icon,
  },
  {
    name: "Invisible Gas Pedal Days.",
    description:
      "Some days, the gas pedal just disappears! Instead, control speed with voice commands like “Faster”, “Slower”, and “Help!”",
    icon: MicrophoneIcon,
  },
  {
    name: "Wheel of Fortune Tires.",
    description:
      "Randomly, the tires inflate and deflate to various PSI levels, changing the ride experience from off-road rugged to moon bounce fun.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Hide-and-Seek Headlights.",
    description:
      "These headlights have a mind of their own. Sometimes they play peek-a-boo in fog, or hide-and-seek in the dark.",
    icon: SunIcon,
  },
];

export default function Feature() {
  const [inspecting, setInspecting] = useState(false);
  const [list, setList] = useState(Array(features.length).fill(null));
  const [index, setIndex] = useState(0);
  const [buttonState, setButtonState] = useState("idle");

  const handleReset = () => {
    setList(Array(features.length).fill(null));
    setIndex(0);
    setButtonState("mapping");
  };

  useEffect(() => {
    let timeout;
    if (inspecting) {
      if (buttonState === "mapping") {
        timeout = setTimeout(() => {
          setList(list.map((_, i) => (i === index ? features[i] : _)));
          setIndex(index + 1);
        }, 1400);
      }

      if (index === features.length) {
        clearInterval(timeout);
        setButtonState("done");
      }
    }
    return () => clearTimeout(timeout);
  }, [inspecting, buttonState, index, list]);

  useEffect(() => {
    if (!inspecting) {
      setList(Array(features.length).fill(null));
      setIndex(0);
    }
  }, [inspecting]);

  if (inspecting) {
    return (
      <div id="lists" className="relative overflow-hidden py-14">
        <div className="max-w-3xl mx-auto">
          <Divider />
        </div>
        <div id="gamble9000" className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-6 lg:px-8 relative">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base font-semibold leading-7 text-sky-600">
                Gamble 9000
              </h2>
              <div className="absolute top-0 right-0">
                <Toggle enabled={inspecting} setEnabled={setInspecting} />
              </div>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                No range? Your problem.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Perfect for those who love a gamble every time they turn on the
                ignition.{" "}
                <span className="text-sm block italic">
                  Comes with a mystery battery life gauge – you never know how
                  much juice is left!
                </span>
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-16">
            <Breadcrumb
              setButtonState={setButtonState}
              buttonState={buttonState}
              current={features[index]?.name}
              onReset={handleReset}
            />
            <div className="mt-7 italic max-w-md text-gray-700 bg-slate-100 rounded-md p-1">
              📘 Loops are useful for going through lists. This loop here is
              mapping every feature to a nice little paragraph.
            </div>
          </div>

          <div className="mx-auto h-96 mt-16 max-w-7xl px-6 sm:mt-16 md:mt-20 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {list.map((feature, idx) =>
                feature ? (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-sky-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ) : (
                  <EmptyState
                    key={idx}
                    icon={{ svg: features[idx].icon }}
                    number={idx + 1}
                  />
                )
              )}
            </dl>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <Divider />
        </div>
      </div>
    );
  }

  return (
    <div id="lists" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-600">
            Gamble 9000
          </h2>
          <div className="absolute top-0 right-0">
            <Toggle enabled={inspecting} setEnabled={setInspecting} />
          </div>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            No range? Your problem.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Perfect for those who love a gamble every time they turn on the
            ignition.{" "}
            <span className="text-sm block italic">
              Comes with a mystery battery life gauge – you never know how much
              juice is left!
            </span>
          </p>
        </div>
      </div>

      <div className="mx-auto h-96 mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-sky-600"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
