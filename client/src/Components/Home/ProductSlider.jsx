import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import axios from "axios";
import ProductMain from "../PoductMain";

const ProductSlider = () => {
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
          OUR BEST SELLERS
        </h2>
        {/* sm */}
        <div className=" sm:block md:hidden lg:hidden xl:hidden ">
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {uniqueProducts.slice(0, 7).map((product, i) => (
              <SwiperSlide key={i}>
                <ProductMain key={i} product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* md */}
        <div className="hidden sm:hidden md:block lg:hidden xl:hidden ">
          <Swiper
            loop={true}
            slidesPerView={2}
            spaceBetween={30}
            centeredSlides={true}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {uniqueProducts.slice(0, 7).map((product, i) => (
              <SwiperSlide key={i}>
                <ProductMain key={i} product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* lg */}
        <div className="hidden sm:hidden md:hidden lg:block xl:hidden ">
          <Swiper
            loop={true}
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            centeredSlides={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {uniqueProducts.slice(0, 7).map((product, i) => (
              <SwiperSlide key={i}>
                <ProductMain key={i} product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* xl */}
        <div className="hidden sm:hidden md:hidden lg:hidden xl:block">
          <Swiper
            loop={true}
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            centeredSlides={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {uniqueProducts.slice(0, 7).map((product, i) => (
              <SwiperSlide key={i}>
                <ProductMain key={i} product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
