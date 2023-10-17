import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Employment from "./components/Employment";
import Projects from "./components/Projects";
import Education from "./components/Education";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HashRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Employment" element={<Employment />} />
            <Route path="/Education" element={<Education />} />
          </Routes>
          <Footer />
        </HashRouter>
      </BrowserRouter>
    </div>
  );
}

export default App;
