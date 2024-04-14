import { Link, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/css-animation/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h1 className="text-4xl">CSS Animation And Transition</h1>
      <ul className="px-2 py-4">
        <li>
          <Link to="/css-animation/keyframe" className="[&.active]:font-bold">
            Keyframe
          </Link>
        </li>
        <li>
          <Link
            to="/css-animation/choreography"
            className="[&.active]:font-bold"
          >
            choreography
          </Link>
        </li>
        <li>
          <Link to="/css-animation/state" className="[&.active]:font-bold">
            state
          </Link>
        </li>
      </ul>
    </div>
  );
}
