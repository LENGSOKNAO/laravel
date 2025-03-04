import React from "react";

const BannerMenNike = () => {
  return (
    <div className="h-[79vh] relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover h-full w-full"
      >
        <source src="/src/video/men.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BannerMenNike;
