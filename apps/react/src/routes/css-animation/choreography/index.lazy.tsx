import { createLazyFileRoute } from "@tanstack/react-router";
import "./style.css";

export const Route = createLazyFileRoute("/css-animation/choreography/")({
  component: Keyframe,
});

export default function Keyframe() {
  return (
    <div className="wrapper">
      <form className="ui-form">
        <input className="ui-input" type="email" placeholder="your@email.com" />
        <button className="ui-button" type="button">
          <span>Subscribe</span>
        </button>
      </form>
    </div>
  );
}
