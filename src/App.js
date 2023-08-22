import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Media from "./pages/Media";
import About from "./pages/About";
import Navbar from "./component/shared/Navbar";
import MblMenu from "./component/shared/MblMenu";
import { useState } from "react";
import Footer from "./component/shared/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostDetails from "./pages/PostDetails";

function App() {
  const [mblMenuOpen, setMblMenuOpen] = useState(false);
  return (
    <>
      <Navbar state={mblMenuOpen} setState={setMblMenuOpen} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/media" element={<Media />}></Route>
        <Route path="/media/:postId" element={<PostDetails />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />

      <MblMenu state={mblMenuOpen} setState={setMblMenuOpen} />
    </>
  );
}
export default App;
