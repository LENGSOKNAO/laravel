import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../Layouts/Layout";

const CheckoutPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [loading, setLoading] = useState(false);

  // Redirect if no product data is passed in state
  if (!state) {
    navigate("/"); // Redirect to home page if no state is found
    return null; // Ensure the rest of the component doesn't render
  }

  const { product, selectedSize } = state || {}; // Destructure safely with default values

  // If there's no product or selectedSize, you can also redirect or show an error message
  if (!product || !selectedSize) {
    navigate("/"); // Redirect to home page or show an error
    return null; // Prevent rendering the rest of the page
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePlaceOrder = async () => {
    setLoading(true);
    try {
      // Here you can make an API call to place the order
      // For now, we'll simulate the process with a setTimeout
      setTimeout(() => {
        alert("Order placed successfully!");
        navigate("/"); // Redirect to homepage after successful order
      }, 2000);
    } catch (error) {
      console.error("Error placing order:", error);
      alert("There was an issue placing your order.");
    } finally {
      setLoading(false);
    }
  };

  // PayPal payment logic
  const handlePayPalPayment = (details, data) => {
    alert("Payment Successful!");
    handlePlaceOrder();  // Trigger order placement after PayPal payment is successful
  };

  useEffect(() => {
    // Only load PayPal script if PayPal is selected
    if (paymentMethod === "PayPal") {
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=AQbu1Nqy026fjuqWrwi12O9o9S4ibycTcd01qm00AI1yKxPOOjWA9xVwMIZYxBLkGpKMfVYnv8CMZ6e3&components=buttons`;
      script.async = true;
      script.onload = () => {
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: product.product_price,
                  },
                  description: product.product_name,
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              handlePayPalPayment(details, data);
            });
          },
        }).render("#paypal-button-container");
      };

      document.body.appendChild(script);

      // Cleanup PayPal script when component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [paymentMethod, product.product_price, product.product_name]);

  return (
    <Layout>
      <section className="max-w-5xl mx-auto p-5">
        <h1 className="text-3xl font-bold mb-5">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Info */}
          <div className="border p-5">
            <h2 className="text-2xl font-semibold mb-2">
              {product.product_name}
            </h2>
            <p className="text-lg mb-2">{product.product_category}</p>
            <p className="text-xl font-semibold mb-5">
              ${product.product_price}
            </p>
            <p className="text-lg mb-2">Size: {selectedSize}</p>
          </div>

          {/* Shipping Info */}
          <div className="border p-5">
            <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
            <div className="space-y-3">
              <input
                type="text"
                name="name"
                value={shippingInfo.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full p-2 border"
              />
              <input
                type="text"
                name="address"
                value={shippingInfo.address}
                onChange={handleInputChange}
                placeholder="Address"
                className="w-full p-2 border"
              />
              <input
                type="text"
                name="city"
                value={shippingInfo.city}
                onChange={handleInputChange}
                placeholder="City"
                className="w-full p-2 border"
              />
              <input
                type="text"
                name="zip"
                value={shippingInfo.zip}
                onChange={handleInputChange}
                placeholder="ZIP Code"
                className="w-full p-2 border"
              />
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="border p-5 mt-5">
          <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="Credit Card"
                onChange={handlePaymentChange}
                className="mr-2"
              />
              Credit Card
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="PayPal"
                onChange={handlePaymentChange}
                className="mr-2"
              />
              PayPal
            </label>
          </div>
        </div>

        {/* PayPal Button Container */}
        {paymentMethod === "PayPal" && (
          <div id="paypal-button-container" className="mt-5  "></div>
        )}

        {/* Place Order Button */}
        {paymentMethod !== "PayPal" && (
          <div className="flex justify-center  mt-5">
            <button
              onClick={handlePlaceOrder}
              disabled={loading}
              className="px-6 py-3 bg-black text-white rounded-full disabled:bg-gray-400"
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default CheckoutPage;
