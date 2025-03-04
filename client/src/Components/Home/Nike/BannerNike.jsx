import React from "react";

const BannerNike = () => {
  return (
    <div className="">
      <div className="h-[79vh] relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover h-full w-full"
        >
          <source src="/src/video/nike.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default BannerNike;
