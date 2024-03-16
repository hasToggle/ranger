import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Toggle({ enabled, setEnabled }) {
  return (
    <Switch.Group
      as="div"
      className="flex items-center ring-1 ring-transparent hover:ring-gray-200 rounded-full ring-offset-8 px-1"
    >
      <span className="bg-white px-3 font-semibold leading-6 text-gray-900 text-3xl">
        💡
      </span>
      <Switch.Label as="span" className="mr-3 text-sm">
        <span className="font-medium text-gray-900">Inspect</span>
      </Switch.Label>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? "bg-sky-600" : "bg-gray-200",
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          )}
        />
      </Switch>
    </Switch.Group>
  );
}
