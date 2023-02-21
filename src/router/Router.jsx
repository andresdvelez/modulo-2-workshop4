import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeScreen from "../components/Screens/HomeScreen";
import CrewSection from "../sections/CrewSection/CrewSection";
import DestinationSection from "../sections/DestinationSection/DestinationSection";
import HeroSection from "../sections/HeroSection/HeroSection";
import TecnologySection from "../sections/TegnologySection/TecnologySection";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}>
          <Route path="/" element={<HeroSection />} />
          <Route path="/destination" element={<DestinationSection />} />
          <Route path="/crew" element={<CrewSection />} />
          <Route path="/tecnology" element={<TecnologySection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
