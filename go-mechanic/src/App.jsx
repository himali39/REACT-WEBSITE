import "./App.css";
import Blog from "./components/blog/Blog";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spares from "./components/spares/Spares";
import Home from "./components/home/Home";
import Login from "./components/pages/Login";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spares" element={<Spares />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
