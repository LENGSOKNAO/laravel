import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Screens/Home";
import HomeNike from "./Screens/Nike/HomeNike";
import HomeNikeMen from "./Screens/Nike/Men/HomeNikeMen";
import ProductMenNike from "./Screens/Pages/Nike/ProductMenNike";
import SinglePage from "./Screens/SinglePage";
import CheckoutPage from "./Screens/CheckoutPage";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nike" element={<HomeNike />} />
      <Route path="/nike/men" element={<HomeNikeMen />} />
      <Route path="/nike/men/new" element={<ProductMenNike />} />
      <Route path="/page/:id" element={<SinglePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
};

export default App;
