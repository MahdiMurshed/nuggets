import { createLazyFileRoute } from "@tanstack/react-router";
import "./style.css";
import { useState } from "react";
import { cn } from "../../../utils/utils";
export const Route = createLazyFileRoute("/css-animation/state/")({
  component: Keyframe,
});

export default function Keyframe() {
  const [state, setState] = useState<
    "subscribe" | "subscribing" | "success" | "error"
  >("subscribe");

  const onChange = () => {
    setState("subscribing");
    setTimeout(() => {
      const random = Math.random();
      if (random > 0.9) {
        setState("success");
      } else {
        setState("error");
      }
    }, 2000);
  };

  return (
    <div
      className={cn(
        "grid place-content-center h-[calc(100vh-48px)] transition-all",
        {
          "[--color:var(--color-gray)]": state === "subscribe",
          "[--color:var(--color-green)]": state === "success",
          "[--color:var(--color-red)]": state === "error",
        }
      )}
    >
      <form
        className={cn(
          "transition-all grid shadow-[0_0.5rem_1rem_#0003] p-4 grid-cols-[1fr_auto] gap-4 overflow-hidden",
          {
            "focus-within:[--color:var(--color-blue)]": [
              "subscribe",
              "subscribing",
            ].includes(state),
            "animate-shake": state === "error",
            "animate-slide-in": state === "subscribe",
          }
        )}
      >
        <input
          className="px-4 h-[var(--input-height)] border-2
          border-[var(--color)] rounded transition-all outline-none duration-300 animate-[slide-in_0.8s_0.4s_var(--transition-easing)_both] "
          type="email"
          placeholder="your@email.com"
        />
        <button
          className="bg-[var(--color)] px-4 rounded text-white font-bold transition-all duration-300 animate-[slide-in_0.8s_0.8s_var(--transition-easing)_both]"
          type="button"
          onClick={onChange}
        >
          <span className="capitalize">{state}</span>
        </button>
      </form>
    </div>
  );
}
