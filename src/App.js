import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Employment from "./components/Employment";
import Projects from "./components/Projects";
import Education from "./components/Education";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/portfolio-simple/" element={<HomePage />} />
          <Route path="/portfolio-simple/Projects" element={<Projects />} />
          <Route path="/portfolio-simple/Employment" element={<Employment />} />
          <Route path="/portfolio-simple/Education" element={<Education />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
