import React from "react";
import Layout from "../../Layouts/Layout";
import BannerNike from "../../Components/Home/Nike/BannerNike";
import TrendingNike from "../../Components/Home/Nike/TrendingNike";
import Foot from "../../Components/Home/Nike/Foot";

const HomeNike = () => {
  return (
    <Layout>
      <BannerNike />
      <TrendingNike />
      <Foot />
    </Layout>
  );
};

export default HomeNike;
