export default function Divider() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative text-black flex justify-center">
        <span className="bg-white px-3 font-semibold leading-6 text-gray-900 text-3xl">
          💡
        </span>
        <span className="bg-white text-sm">What are loops for?</span>
        <span className="bg-white px-3 font-semibold leading-6 text-gray-900 text-3xl">
          💡
        </span>
      </div>
    </div>
  );
}
