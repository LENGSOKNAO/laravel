import React from "react";
import Layout from "../../../Layouts/Layout";
import BannerMenNike from "../../../Components/Home/Nike/Men/BannerMenNike";
import Style from "../../../Components/Home/Nike/Men/Style";
import Category from "../../../Components/Home/Nike/Men/Category";
import BannerMenNikeTrending from "../../../Components/Home/Nike/Men/BannerMenNikeTrending";

const HomeNikeMen = () => {
  return (
    <Layout>
      <BannerMenNike />
      <Style />
      <Category />
      <BannerMenNikeTrending />
    </Layout>
  );
};

export default HomeNikeMen;
