import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/css-animation/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h1 className="text-4xl">CSS Animation And Transition</h1>
    </div>
  );
}
