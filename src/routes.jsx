import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./components/NotFound/NotFound";
import Hero from "./pages/Hero";
import { useLocation } from "react-router-dom";
import { useSearchContext } from "./context/SearchContext";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters/:id" element={<Hero />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
