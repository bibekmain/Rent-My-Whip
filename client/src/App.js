import "../src/dist/styles.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./pages/Models";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
