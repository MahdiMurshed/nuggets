import { createLazyFileRoute } from "@tanstack/react-router";
import { motion, useMotionValue } from "framer-motion";
import { cn } from "../../../utils/utils";
import { ChangeEvent } from "react";
export const Route = createLazyFileRoute("/framer-motion/interactivity/")({
  component: () => <InteractiveButton />,
});

const InteractiveButton = () => {
  const scale = useMotionValue(1);
  const handleRangeChange = (ev: ChangeEvent<HTMLInputElement>) => {
    scale.set(parseFloat(ev.target.value));
  };
  return (
    <div className="flex flex-col gap-4 items-center text-white p-8 justify-center h-screen">
      <motion.button
        className={cn(
          "h-16 rounded-full px-8 bg-blue-600",
          "transition-transform duration-300 focus:outline-none focus-visible:scale-110 hover:scale-110 active:translate-y-4"
        )}
        // whileHover={{
        //   scale: 1.1,
        // }}
        // whileTap={{
        //   y: "10px",
        // }}
        // whileFocus={{
        //   scale: 1.1,
        // }}
      >
        Hover Me
      </motion.button>

      <motion.div
        className="bg-black px-6 py-4 rounded-md"
        style={{
          scale,
        }}
      >
        Scale
      </motion.div>

      <input
        type="range"
        min={0.5}
        max={5}
        step={0.01}
        defaultValue={1}
        onChange={handleRangeChange}
      />
    </div>
  );
};
