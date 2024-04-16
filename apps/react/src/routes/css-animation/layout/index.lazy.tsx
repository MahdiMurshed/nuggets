import { createLazyFileRoute } from "@tanstack/react-router";
import "./style.css";
import { useState } from "react";
import { cn } from "../../../utils/utils";
import { motion } from "framer-motion";

export const Route = createLazyFileRoute("/css-animation/layout/")({
  component: Layout,
});

export default function Layout() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="grid place-content-center h-screen">
      <motion.div
        layout
        className={cn("grid grid-cols-1 w-[20vw] aspect-square gap-8", {
          "grid-cols-2 border p-2 w-[70vw] aspect-[2]": expanded,
        })}
        onClick={() => setExpanded((prev) => !prev)}
      >
        <figure className="grid place-content-center border bg-gradient-to-br from-[#124269] to-[#309aef] cursor-pointer">
          <figcaption className="text-3xl font-bold text-white">
            Animation
          </figcaption>
        </figure>
        {expanded && (
          <motion.div
            transition={{ duration: 0.3, delay: 0.3 }}
            initial={{ opacity: 0, transform: "translateX(-2rem)" }}
            animate={{ opacity: 1, transform: "translateX(0)" }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              ullam hic consectetur ducimus neque ipsam incidunt voluptatem
              voluptatum eos. Voluptatum minus omnis provident sit architecto,
              mollitia nihil aspernatur sed praesentium.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
