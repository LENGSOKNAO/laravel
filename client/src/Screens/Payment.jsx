import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = location.state || {};

  // Handle payment with cash
  const handlePayWithCash = () => {
    console.log("Payment with cash:", cartItems);
    alert("Payment with cash successful!");
    navigate("/"); // Redirect to home or confirmation page
  };

  // Handle payment with PayPal
  const handlePayWithPayPal = () => {
    console.log("Payment with PayPal:", cartItems);
    alert("Payment with PayPal successful!");
    navigate("/payment"); // Redirect to home or confirmation page
  };

  // Handle the case when no cart items are found
  if (!cartItems || cartItems.length === 0) {
    return <div>No items in cart. Please go back and add products.</div>;
  }

  return (
    <section className="flex-center w-full h-screen bg-gray-100">
      <div className="w-[80vw] max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Payment</h1>

        {/* Payment Information */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Expiration Date
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="MM/YY"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="123"
              />
            </div>
          </form>
        </div>

        {/* Payment Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handlePayWithCash}
            className="flex-1 bg-black text-white py-3 rounded-4xl hover:bg-gray-800 transition-colors"
          >
            Pay with Cash
          </button>
          <button
            onClick={handlePayWithPayPal}
            className="flex-1 bg-blue-500 text-white py-3 rounded-4xl hover:bg-blue-600 transition-colors"
          >
            Pay with PayPal
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;
