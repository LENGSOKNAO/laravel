import React from "react";
import Layout from "../../../Layouts/Layout";
import PageProductMenNike from "../../../Components/Page/Nike/Men/PageProductMenNike";
import ListNav from "../../../Components/ListNav";

const ProductMenNike = () => {
  return (
    <Layout>
      <section>
        <div className=" w-full flex gap-5">
          <div className="w-[17vw] ">
            <ListNav />
          </div>
          <div className="w-[83vw]  ">
            <PageProductMenNike />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductMenNike;
