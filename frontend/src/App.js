import React from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Header from "./components/header";
import Home from "./screens/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
