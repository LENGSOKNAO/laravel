import React from "react";
import { Link } from "react-router-dom";

const Crad = ({ product }) => {
  return (
    <div className="relative">
      <div className="bg-[rgba(0,0,0,0.4)]">
        <img className="w-full " src={product.link} alt="" />
      </div>
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] "></div>
      <div className="absolute bottom-10 left-10 text-[#fff]  ">
        <h2 className="text-3xl text-[#ffffff] z-40 font-semibold ">
          {product.name}
        </h2>
        <p className="text-sm py-2 font-semibold">{product.drc}</p>
        <button className="bg-[#fff] text-black  py-1 px-8 rounded-4xl font-medium my-2">
          <Link>Shop</Link>
        </button>
      </div>
    </div>
  );
};

export default Crad;
