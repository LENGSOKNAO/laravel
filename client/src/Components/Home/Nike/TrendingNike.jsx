import React from "react";
import Crad from "../../Crad";

const TrendingNike = () => {
  const listProduct = [
    {
      id: "1",
      name: "Enger That Lasts",
      drc: "A new Icon emerges from the shound of energy",
      link: "/src/assets/Trending/men-s-shoes-clothing-accessories (2).jpg",
    },
    {
      id: "2",
      name: "Comfort with and Edgo",
      drc: "Supercharge your step with our most reponsive Pegaus yet",
      link: "/src/assets/Trending/men-s-shoes-clothing-accessories (1).jpg",
    },
  ];

  const styleH2 = `text-center text-6xl font-black py-7 
    text-center text-7xl font-black py-7 my-10`;
  return (
    <section>
      <h2
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className={styleH2}
      >
        NIKE <br /> TENDING
      </h2>
      <div className="grid md:grid-cols-2 ">
        <div
          data-aos="fade-down-right"
          data-aos-offset="300"
          data-aos-duration="3000"
          className=""
        >
          <Crad product={listProduct[0]} />
        </div>
        <div
          data-aos="fade-down-left"
          data-aos-offset="300"
          data-aos-duration="3000"
          className=""
        >
          <Crad product={listProduct[1]} />
        </div>
      </div>
    </section>
  );
};

export default TrendingNike;
