const stats = [
  { id: 1, name: "Charging stations, more to come!", value: "5" },
  { id: 2, name: "Hours waiting for a full charge.", value: "719.000" },
  { id: 3, name: "New outdoor camps every day.", value: "3800" },
];

export default function Stats() {
  return (
    <div className="py-24 sm:py-32 border-t-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
