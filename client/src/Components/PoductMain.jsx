import React from "react";
import { Link } from "react-router-dom";

const ProductMain = ({ product }) => {
  return (
    <Link to={`/page/${product.id}`}>
      <img
        className="w-[500px] h-[500px] object-cover "
        src={`${import.meta.env.VITE_API_BASE_URL}/storage/${
          product.product_main_image
        }`}
        alt={product.name}
      />
    </Link>
  );
};

export default ProductMain;
