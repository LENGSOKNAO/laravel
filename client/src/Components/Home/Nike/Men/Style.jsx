import React from "react";
import Crad from "../../../Crad";

const Style = () => {
  const list = [
    {
      id: "1",
      name: "Cade Cunninghame's  Efforless Game",
      dcr: "",
      link: "/src/assets/style/men-s-shoes-clothing-accessories (3).jpg",
    },
    {
      id: "1",
      name: "Christian Colemen's Strong Finish",
      dcr: "",
      link: "/src/assets/style/men-s-shoes-clothing-accessories (4).jpg",
    },
    {
      id: "1",
      name: "Malik Naber's New Playbook",
      dcr: "",
      link: "/src/assets/style/men-s-shoes-clothing-accessories.jpg",
    },
  ];

  return (
    <section>
      <h2 className="text-5xl font-black text-center py-[50px]">
        STYLE <br /> BY THE PROS
      </h2>
      <div className="grid md:grid-cols-3 gap-2 ">
        <div
          data-aos="fade-down-right"
          data-aos-offset="300"
          data-aos-duration="3000"
          className=""
        >
          <Crad product={list[0]} />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className=""
        >
          <Crad product={list[1]} />
        </div>
        <div
          data-aos="fade-down-left"
          data-aos-offset="300"
          data-aos-duration="3000"
          className=""
        >
          <Crad product={list[2]} />
        </div>
      </div>
    </section>
  );
};

export default Style;
