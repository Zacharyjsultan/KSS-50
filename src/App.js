import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import HomePage from "./Components/HomePage";
import Contact from "./Components/Contact";
// import UnderConstruction from "./Components/components/UnderConstruction";
import Testimonals from "./Components/Testimonials";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* change route path
        when done */}
        {/* <Route path="/" element={<UnderConstruction />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonals />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
