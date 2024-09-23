import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DefaultPage from "./components/DefaultPage/DefaultPage";
import Home from "./components/Home/Home";
import Pagetwo from "./components/ExtraPages/Pagetwo";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <DefaultPage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/two" element={<Pagetwo />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
