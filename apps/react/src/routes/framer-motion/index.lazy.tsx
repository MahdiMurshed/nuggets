import { Link, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/framer-motion/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h1 className="text-4xl">Framer Motion</h1>
      <ul className="px-2 py-4">
        <li>
          <Link
            to="/framer-motion/interactivity"
            className="[&.active]:font-bold"
          >
            Interactivity
          </Link>
        </li>
      </ul>
    </div>
  );
}
