import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DefaultPage from "./components/DefaultPage/DefaultPage";
import Home from "./components/Home/Home";
import Pagetwo from "./components/ExtraPages/Pagetwo";
import Footer from "./components/Footer/Footer";
import Pagethree from "./components/ExtraPages/Pagethree";
import Pagefour from "./components/ExtraPages/Pagefour";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <DefaultPage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/two" element={<Pagetwo />} />
          <Route path='/three' element={<Pagethree/>}/>
          <Route path= '/four' element={<Pagefour/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
