import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Button from "./Button";

export default function Breadcrumb({
  buttonState,
  setButtonState,
  onReset,
  current,
}) {
  if (buttonState === "idle") {
    return (
      <Button state={buttonState} onClick={() => setButtonState("mapping")} />
    );
  }

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Button
              state={buttonState}
              onClick={
                buttonState === "done"
                  ? () => onReset()
                  : () =>
                      setButtonState(
                        buttonState === "mapping" ? "paused" : "mapping"
                      )
              }
            />
          </div>
        </li>
        {["next feature is", current].map((name) => (
          <li key={name}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <span className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                {name}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
