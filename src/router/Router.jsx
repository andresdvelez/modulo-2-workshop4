import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Sections
import DestinationSection from "../sections/DestinationSection/DestinationSection";
import CrewSection from "../sections/CrewSection/CrewSection";
import HeroSection from "../sections/HeroSection/HeroSection";
import TecnologySection from "../sections/TegnologySection/TecnologySection";

// Screens
import HomeScreen from "../Screens/HomeScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}>
          <Route path="/" element={<HeroSection />} />
          <Route path="/destination" element={<DestinationSection />} />
          <Route path="/crew" element={<CrewSection />} />
          <Route path="/technology" element={<TecnologySection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
