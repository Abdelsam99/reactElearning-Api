// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Base from "./components/Base";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Course from "./pages/Course";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Lesson from "./pages/Lesson";
import PageError from "./pages/PageError";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Base />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/leson" element={<Lesson />} />
        {/* p */}
        <Route path="/*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
