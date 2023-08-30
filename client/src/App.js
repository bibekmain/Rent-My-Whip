import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
// import Register from "./Pages/Register";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
import Contact from "./Pages/Contact";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="register" element={<Register/>}/> */}
      </Routes>
    </>
  );
}

export default App;
