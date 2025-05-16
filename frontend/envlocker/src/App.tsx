import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center text-center">
        <h1>ENV LOCKER</h1>
      </div>
    </div>
  );
}

export default App;
