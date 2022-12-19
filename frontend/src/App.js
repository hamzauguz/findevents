import React from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Header from "./components/header";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
