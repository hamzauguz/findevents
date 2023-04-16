import React from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Header from "./components/header";
import AddEvents from "./screens/AddEvents";
import Contact from "./screens/Contact";
import Events from "./screens/Events";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/Profile";
import Footer from "./components/footer";

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
          <Route path="/events" element={<Events />} />
          <Route path="/addevents" element={<AddEvents />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
