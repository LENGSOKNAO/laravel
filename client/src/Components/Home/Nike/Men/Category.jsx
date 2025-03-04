import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import ProductMain from "../../../PoductMain";

const Category = () => {
  const [menProducts, setMenProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/product`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        const allProducts = Array.isArray(response.data) ? response.data : [];

        // Filtering only Men's products
        const menProducts = allProducts.filter(
          (product) =>
            product.product_category &&
            product.product_category.toLowerCase().includes("men") &&
            !product.product_category.toLowerCase().includes("women")
        );

        setMenProducts(menProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <section>
      <div className="px-[50px]">
        <h2 className="text-7xl text-center font-black font-[Anton] py-[100px]">
          OUR BEST <br /> MEN SELLERS
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
            {menProducts.slice(0, 7).map((product, i) => (
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
            {menProducts.slice(0, 7).map((product, i) => (
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
            {menProducts.slice(0, 7).map((product, i) => (
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
            {menProducts.slice(0, 7).map((product, i) => (
              <SwiperSlide key={i}>
                <ProductMain key={i} product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Category;
