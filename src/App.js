import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import HomePage from "./Components/HomePage";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
