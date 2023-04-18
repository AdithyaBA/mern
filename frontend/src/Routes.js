import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./core/Home";

const Routees = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" exact component={Home} />
      </Routes >
    </BrowserRouter>
  );
};

export default Routees;
