import {useState} from "react";
import "./App.css";
import Aurora from "./components/Aurora";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-screen overflow-hidden bg-black">
        {/* Aurora Background */}
        <Aurora
          colorStops={["#7CFF67", "#B19EEF", "#5227FF"]}
          blend={0.5}
          amplitude={1.3}
          speed={0.5}
        />
        <Nav />
        {/* Foreground Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            Hey There! I'm Kingsuk Bose
          </h1>
        </div>
      </div>

      {/* Default Vite + React Content */}
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
