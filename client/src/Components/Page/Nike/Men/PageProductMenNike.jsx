import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductMain from "../../../PoductMain";

const NikeNewMen = () => {
  const [products, setProducts] = useState([]);
  const [activeProducts, setActiveProducts] = useState({});
  const [hoveredGroup, setHoveredGroup] = useState(null); // Track hovered group

  // Function to check if the product is within the last 5 days
  const isNewProduct = (createdAt) => {
    const currentDate = new Date();
    const productDate = new Date(createdAt);
    const timeDifference = currentDate - productDate;
    const fiveDaysInMilliseconds = 10 * 24 * 60 * 60 * 1000; // 5 days in milliseconds
    return timeDifference <= fiveDaysInMilliseconds;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/product`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        const allProducts = Array.isArray(response.data) ? response.data : [];
        const menProducts = allProducts.filter(
          (product) =>
            product.product_category &&
            product.product_category.toLowerCase().includes("men") &&
            !product.product_category.toLowerCase().includes("women")
        );
        setProducts(menProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Group products by product name
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.product_name]) {
      acc[product.product_name] = [];
    }
    acc[product.product_name].push(product);
    return acc;
  }, {});

  const handleMouseEnter = (groupId, product) => {
    setActiveProducts((prev) => ({ ...prev, [groupId]: product }));
  };

  const getImageUrl = (image) =>
    `${import.meta.env.VITE_API_BASE_URL}/storage/${image}`;

  return (
    <section>
      {products.length}
      <div className="grid grid-cols-3">
        {Object.keys(groupedProducts).map((productName) => {
          const productGroup = groupedProducts[productName];
          const groupId = productGroup[0].id;
          const activeProduct = activeProducts[groupId] || productGroup[0];

          return (
            <section
              key={groupId}
              className="relative my-[20px]"
              onMouseEnter={() => setHoveredGroup(groupId)}
              onMouseLeave={() => setHoveredGroup(null)}
            >
              <ProductMain product={activeProduct} />

              <div className="relative  ">
                {/* Show product name, category, and "New" label for single product group */}
                {productGroup.length === 1 && (
                  <>
                    <h2>{activeProduct.product_name}</h2>
                    <h2>{activeProduct.product_category}</h2>
                    <h2>
                      {productGroup.length === 1
                        ? `${productGroup.length} Color`
                        : `${productGroup.length} Colors`}
                    </h2>{" "}
                    {/* Corrected line */}
                    {isNewProduct(activeProduct.created_at) && (
                      <h2 className="">New</h2>
                    )}
                  </>
                )}

                {/* Show product name and category for group hover */}
                {hoveredGroup !== groupId && productGroup.length > 1 && (
                  <div className="my-4">
                    <h2>{activeProduct.product_name}</h2>
                    <h2>{activeProduct.product_category}</h2>
                    <h2>
                      {productGroup.length === 1
                        ? `${productGroup.length} Color`
                        : `${productGroup.length} Colors`}
                    </h2>
                  </div>
                )}

                {/* Show product images when hovering over multi-product group */}
                {hoveredGroup === groupId && productGroup.length > 1 && (
                  <div className="flex gap-2 w-full py-2">
                    {productGroup.map((product) => (
                      <div key={product.id}>
                        <Link to={`/page/${product.id}`}>
                          <img
                            className="w-[50px] h-[50px]  object-center  "
                            src={getImageUrl(product.product_main_image)}
                            alt={product.product_name || "Product Image"}
                            onMouseEnter={() =>
                              handleMouseEnter(groupId, product)
                            }
                          />
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <p className=" ">${activeProduct.product_price}</p>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default NikeNewMen;
