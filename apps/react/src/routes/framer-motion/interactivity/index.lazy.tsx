import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { cn } from "../../../utils/utils";
export const Route = createLazyFileRoute("/framer-motion/interactivity/")({
  component: () => <InteractiveButton />,
});

const InteractiveButton = () => {
  return (
    <div className="flex flex-col items-center text-white p-8 justify-center h-screen">
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
    </div>
  );
};
