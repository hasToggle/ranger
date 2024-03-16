import { CodeBracketIcon } from "@heroicons/react/20/solid";

export default function Button({ state, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className="inline-flex items-center gap-x-1.5 rounded-md bg-sky-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
      >
        {state === "idle" && "Generate"}
        {state === "paused" && "Continue"}
        {state === "mapping" && "Mapping ..."}
        {state === "done" && "Re-generate"}
        {(state === "idle" || state === "mapping" || state === "paused") && (
          <CodeBracketIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
        )}
        {state === "done" && (
          <svg
            viewBox="0 0 512 512"
            height={"1.25rem"}
            width={"1.25rem"}
            fill="white"
          >
            <path d="M371.2 122.9C340.3 96.2 300 80 256 80C158.8 80 80 158.8 80 256s78.8 176 176 176c39.7 0 76.2-13.1 105.6-35.2c10.6-8 25.6-5.8 33.6 4.8s5.8 25.6-4.8 33.6C353 463.3 306.4 480 256 480C132.3 480 32 379.7 32 256S132.3 32 256 32c57.3 0 109.6 21.5 149.2 56.9l30.5-30.5c6.6-6.6 15.6-10.3 25-10.3C480.2 48 496 63.8 496 83.3V200c0 13.3-10.7 24-24 24H355.3c-19.5 0-35.3-15.8-35.3-35.3c0-9.4 3.7-18.3 10.3-25l40.8-40.8zm76.8-9L385.9 176H448V113.9z" />
          </svg>
        )}
      </button>
    </>
  );
}
