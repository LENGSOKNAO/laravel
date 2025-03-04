import React from "react";
import Layout from "../Layouts/Layout";
import Banner from "../Components/Home/Banner";
import Brand from "../Components/Home/Brand";
import BannerProduct from "../Components/Home/ProductSlider";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Brand />
      <BannerProduct />
    </Layout>
  );
};

export default Home;
