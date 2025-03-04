import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import axios from "axios";

const Banner = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/banner`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        console.log("API Response:", response.data);
        setProducts(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="  sm:block md:hidden lg:hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="mySwiper  h-[80vh]  "
        >
          {products.map((e, i) => (
            <SwiperSlide key={i} className="w-full overflow-hidden h-full">
              <img
                className=" w-full h-full object-cover "
                src={`${import.meta.env.VITE_API_BASE_URL}/storage/${
                  e.banner_small_image
                }`}
                alt={e.banner_name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden sm:hidden md:block ">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="mySwiper h-[80vh]  "
        >
          {products.map((e, i) => (
            <SwiperSlide key={i} className="w-full h-full">
              <img
                className=" w-full h-full object-cover "
                src={`${import.meta.env.VITE_API_BASE_URL}/storage/${
                  e.banner_image
                }`}
                alt={e.banner_name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
