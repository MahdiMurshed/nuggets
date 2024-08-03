import { Link } from "react-router-dom";
import { RoutePathMap } from "./routes/RoutePathMap";

function App() {
  return (
    <div className="max-w-sm border-cyan-400 border-2 mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-2xl text-center font-semibold text-cyan-500 mb-4 underline">
        Routes
      </h3>
      <ul className="space-y-2">
        {Object.entries(RoutePathMap).map(([key, value]) => (
          <li key={value.path} className="capitalize text-lg">
            <Link
              to={value.path}
              className="text-blue-500 hover:text-blue-700 hover:underline"
            >
              {key}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
