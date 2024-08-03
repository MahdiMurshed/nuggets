import { data } from "../features/recursion/data";
import Node from "../features/recursion/Node";

const Recursion = () => {
  return (
    <div className="mx-auto max-w-3xl shadow rounded p-4">
      <ul>
        {data.map((node) => (
          <Node key={node.name} node={node} />
        ))}
      </ul>
    </div>
  );
};

export default Recursion;
