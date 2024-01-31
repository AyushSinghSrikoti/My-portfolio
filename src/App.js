import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import { motion } from "framer-motion";
import Preloader from "./components/preloader";
import Navbar from "./components/navbar";
import Home from "./components/home";
// import Contact from "./components/contacts";
import About from "./components/about";
import Project from "./components/projects";
import Resume from "./components/resume";
import Footer from "./components/footer";

function App() {
//   const [mousePosition, setMousePosition] = useState({
//     x: 0,
//     y: 0,
//   });

//   useEffect(() => {
//     const mouseMove = (e) => {
//       setMousePosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };

//     window.addEventListener("mousemove", mouseMove);

//     return () => {
//       window.removeEventListener("mousemove", mouseMove);
//     };
//   }, []);

//   const variants = {
//     default: {
//       x: mousePosition.x - 5,
//       y: mousePosition.y - 22,
//       transition: {
//         duration: 0,
//       },
//     },
//   };

  return (
    <BrowserRouter>
      <>
        {/* <motion.div className="cursor" variants={variants} animate="default" /> */}
        <Preloader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          {/* <Route path="/contacts" element={<Contact />} /> */}
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer/>
      </>
    </BrowserRouter>
  );
}

export default App;
