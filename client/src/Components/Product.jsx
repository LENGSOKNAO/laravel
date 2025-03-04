import React, { useState } from "react";
import { Link } from "react-router-dom";

const Product = ({ groupedProducts }) => {
  const [hover, setHover] = useState(false);
  const [activeProducts, setActiveProducts] = useState({});

  const handleMouseEnter = (groupId, product) => {
    setActiveProducts((prev) => ({ ...prev, [groupId]: product }));
  };

  const getImageUrl = (image) => {
    return image || "default-image.jpg";  
  };

  return (
    <section className="grid grid-cols-3">
      {Object.keys(groupedProducts).map((productName) => {
        const productGroup = groupedProducts[productName];
        const groupId = productGroup[0].id;
        const activeProduct = activeProducts[groupId] || productGroup[0];

        return (
          <section
            key={groupId}
            className="relative"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Link to={`/page/${activeProduct.id}`}>
              <img
                className="w-[500px] h-[500px] object-cover"
                src={getImageUrl(activeProduct.product_main_image)}
                alt={activeProduct.product_name || "Product Image"}
              />
            </Link>
            {!hover && <h2>{activeProduct.product_name}</h2>}
            <p className="mb-2">${activeProduct.product_price}</p>
            {hover && productGroup.length > 1 && (
              <div className="flex gap-2 w-full">
                {productGroup.map((product) => (
                  <div key={product.id}>
                    <Link to={`/page/${product.id}`}>
                      <img
                        className="w-[100px]"
                        src={getImageUrl(product.product_main_image)}
                        alt={product.product_name || "Product Image"}
                        onMouseEnter={() => handleMouseEnter(groupId, product)}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </section>
        );
      })}
    </section>
  );
};

export default Product;
