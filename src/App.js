import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Components/Landing";
import HomePage from "./Components/HomePage";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
