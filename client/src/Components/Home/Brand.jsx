import React from "react";
import Crad from "../Crad";
import { Link } from "react-router-dom";

const Brand = () => {
  const listNike = [
    {
      id: "1",
      name: "Nike Bras",
      link: "/src/assets/BrandImage/NIkeBrand.jpg",
    },
    {
      id: "2",
      name: "Introducing Nike 27.7 Collection",
      link: "/src/assets/BrandImage/NIkeBrand1.jpg",
    },
  ];
  const listSalomon = [
    {
      id: "1",
      name: "NEW SPRING ARRVIVALS",
      link: "/src/assets/BrandImage/SalomonBrand.jpg",
    },
    {
      id: "2",
      name: "WINTER TRAIL RUNNING",
      link: "/src/assets/BrandImage/SalomonBrand1.jpg",
    },
  ];
  const styleH2 = `text-center text-6xl font-black py-7 
text-center text-6xl font-black py-7 my-10`;
  return (
    <section className="overflow-hidden">
      <div className="">
        <h2
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className={styleH2}
        >
          NIKE <br /> FOOTBALL
        </h2>
        <div className=" grid lg:grid-cols-2    ">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className=""
          >
            <Crad product={listNike[0]} />
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="500"
            className=""
          >
            <Crad product={listNike[1]} />
          </div>
        </div>
        <h2 className={styleH2}>KEEP MOVING</h2>
        <div className="flex-center py-2 ">
          <button className="bg-[#000] text-[#fff]  py-1 px-8 rounded-4xl font-medium my-2">
            <Link>Shop</Link>
          </button>
        </div>
        <div className="  sm:block md:hidden  ">
          <img
            className="w-full"
            src="/src/assets/BrandImage/AntaSmallBrand.jpg"
            alt=""
          />
        </div>
        <div className="hidden sm:hidden md:block lg:block">
          <img
            className="w-full"
            src="/src/assets/BrandImage/AntaBrand.png"
            alt=""
          />
        </div>
        <div className="   my-12  grid lg:grid-cols-2 gap-2">
          <div
            data-aos="fade-down-right"
            data-aos-offset="300"
            data-aos-duration="3000"
            className=""
          >
            <Crad product={listSalomon[0]} />
          </div>
          <div
            data-aos="fade-down-left"
            data-aos-offset="300"
            data-aos-duration="3000"
            className=""
          >
            <Crad product={listSalomon[1]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
