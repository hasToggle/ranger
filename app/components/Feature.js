import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Roll-The-Dice Drive Mode.",
    description:
      "Can't decide if you should take the scenic route or the highway? Just hit the 'Roll' button, and the SUV will randomly choose your driving mode. Eco, Sport, or the secret third option: Tortoise.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Schrodinger's GPS.",
    description:
      "Is your destination on the left? Right? Straight ahead? This GPS won't tell you until you've passed it. Dive deep into quantum mechanics every drive. You're both lost and found until you check!",
    icon: LockClosedIcon,
  },
  {
    name: "Russian Roulette Charging Ports.",
    description:
      "With six charging ports, one randomly provides super-fast charging. The others? Well, they might just power a tiny light bulb.",
    icon: ArrowPathIcon,
  },
  {
    name: "Invisible Gas Pedal Days.",
    description:
      "Some days, the gas pedal just disappears! Instead, control speed with voice commands like “Faster”, “Slower”, and “Help!”",
    icon: FingerPrintIcon,
  },
  {
    name: "Wheel of Fortune Tires.",
    description:
      "Randomly, the tires inflate and deflate to various PSI levels, changing the ride experience from off-road rugged to moon bounce fun.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Hide-and-Seek Headlights.",
    description:
      "These headlights have a mind of their own. Sometimes they play peek-a-boo in fog, or hide-and-seek in the dark.",
    icon: ServerIcon,
  },
];

export default function Feature() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Gamble 9000
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            No range? Your problem.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Perfect for those who love a gamble every time they turn on the
            ignition. Comes with a mystery battery life gauge – you never know
            how much juice is left!
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src="https://cdn.midjourney.com/79f12115-bcc9-4246-b388-b0b960645013/0_2.png"
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
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
