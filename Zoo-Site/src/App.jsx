import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Animals } from "./components/pages/Animals";
import { Contact } from "./components/pages/Contact";
import { Lion } from "./components/pages/Lion";
import { Zebra } from "./components/pages/Zebra";
import { Giraffe } from "./components/pages/Griaffe";
import { Hawk } from "./components/pages/Hawk";
import { Parrot } from "./components/pages/Parrot";
import { Flamingo } from "./components/pages/Flamingo";
import { Clownfish } from "./components/pages/Clownfish";
import { Shark } from "./components/pages/Shark";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lion" element={<Lion />} />
        <Route path="/zebra" element={<Zebra />} />
        <Route path="/giraffe" element={<Giraffe />} />
        <Route path="/hawk" element={<Hawk />} />
        <Route path="/parrot" element={<Parrot />} />
        <Route path="/flamingo" element={<Flamingo />} />
        <Route path="/clownfish" element={<Clownfish />} />
        <Route path="/shark" element={<Shark />} />
      </Routes>
    </div>
  );
};

export default App;
