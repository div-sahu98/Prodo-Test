import "./App.css";
import { useEffect, useState } from "react";
import { getCategoriesData } from "./api/apiAction";
import ProdoCategories from "./componets/ProdoCategories";
import ProductDetails from "./componets/ProductDetails";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProdoCategories />} />
        <Route path="/details" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
