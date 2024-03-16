export default function EmptyState({ icon, number }) {
  return (
    <button
      type="button"
      className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
    >
      <icon.svg
        className="absolute left-1 top-1 h-5 w-5 text-sky-600"
        aria-hidden="true"
      />
      <span className="mt-2 block text-sm font-semibold text-gray-900">
        feature {number}
      </span>
    </button>
  );
}
