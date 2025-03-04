import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Page = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [loading, setLoading] = useState(true);

  const btnStyle = `w-full text-center py-3 rounded-4xl`;

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/product/${id}`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        if (typeof response.data.product_list_images === "string") {
          response.data.product_list_images = JSON.parse(
            response.data.product_list_images
          );
        }
        if (typeof response.data.product_sizes === "string") {
          response.data.product_sizes = JSON.parse(response.data.product_sizes);
        }

        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error.response);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <div className="loader"></div> {/* Add your loading spinner here */}
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleSizeClick = (size) => {
    setSelectedSize((prevSize) => (prevSize === size ? null : size));
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }
    navigate("/checkout", {
      state: {
        product: product,
        selectedSize: selectedSize,
      },
    });
  };

  const handleFavorite = () => {
    console.log(`Added ${product.product_name} to favorites`);
  };

  return (
    <section>
      <div className="flex-center w-full">
        <div className="flex gap-3">
          <div
            className={`grid ${
              product.product_list_images.length <= 8
                ? "grid-cols-1"
                : "grid-cols-2"
            } overflow-hidden h-full gap-1`}
          >
            {product.product_list_images.length === 0 ? (
              <p>No images available</p>
            ) : (
              product.product_list_images.map((image, index) => (
                <img
                  className="w-[70px] rounded-sm"
                  key={index}
                  src={`${import.meta.env.VITE_API_BASE_URL}/storage/${image}`}
                  alt="Product"
                  onMouseEnter={() => handleMouseEnter(image)}
                />
              ))
            )}
          </div>

          <img
            className="w-[600px] h-[700px] object-cover"
            src={`${import.meta.env.VITE_API_BASE_URL}/storage/${
              hoveredImage || product.product_main_image
            }`}
            alt={product.product_name}
          />
          <div className="w-[20vw]">
            <h2 className="text-2xl font-medium">{product.product_name}</h2>
            <h2 className="text-xl font-light">{product.product_category}</h2>
            <p className="text-xl font-semibold py-[5px]">
              ${product.product_price}
            </p>

            {Array.isArray(product.product_sizes) &&
            product.product_sizes.length > 0 ? (
              <div className="mt-2">
                <h4 className="font-semibold">Select Size:</h4>
                <div className="grid grid-cols-4 gap-1">
                  {product.product_sizes.map((size, i) => (
                    <span
                      key={i}
                      onClick={() => handleSizeClick(size)}
                      className={`px-1 py-1 rounded-sm cursor-pointer ${
                        selectedSize === size
                          ? "text-center border-[1px] py-2 text-[rgba(0,0,0,1)]"
                          : "text-center border-[1px] py-2 text-[rgba(0,0,0,0.5)] hover:text-[rgba(0,0,0,0.9)]"
                      }`}
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <p>No sizes available</p>
            )}

            <div className="flex flex-col items-center">
              <div
                className={`text-[rgb(255,255,255)] bg-[#000] hover:bg-[rgba(0,0,0,0.7)] my-5 ${btnStyle}`}
                onClick={handleAddToCart}
              >
                Add to Cart
              </div>
              <div
                className={`text-[rgba(0,0,0,0.5)] hover:text-[rgba(0,0,0,0.9)] border-[1px] ${btnStyle}`}
                onClick={handleFavorite}
              >
                Favorite
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
