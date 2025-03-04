import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import axios from "axios";
import ProductMain from "../../PoductMain";

const Foot = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/product`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        setProducts(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching products:", error.response);
      }
    };
    fetchProducts();
  }, []);

  const uniqueProducts = [];
  const seenProductNames = new Set();

  products.forEach((product) => {
    if (!seenProductNames.has(product.product_name)) {
      uniqueProducts.push(product);
      seenProductNames.add(product.product_name);
    }
  });

  return (
    <section>
      <div className="px-[50px]">
        <h2 className="text-7xl text-center font-black font-[Anton] py-[100px]">
          SHOP BY CLASSICS
        </h2>

        {/* xl */}
        <div className="flex-center">
          <div className="grid md:grid-cols-3 gap-5  ">
            {uniqueProducts.slice(0, 3).map((product, i) => (
              <div className="">
                <ProductMain key={i} product={product} />
                <p className="text-sm font-bold ">{product.product_name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foot;
