// CartContext.js
import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add a product to the cart
  const addToCart = (product, selectedSize) => {
    const newItem = {
      id: product.id,
      name: product.product_name,
      price: parseFloat(product.product_price),
      size: selectedSize,
      quantity: 1,
      total: parseFloat(product.product_price),
    };

    // Check if the product already exists in the cart
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === newItem.id && item.size === newItem.size
    );

    if (existingItemIndex !== -1) {
      // If the product already exists, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      updatedCartItems[existingItemIndex].total =
        updatedCartItems[existingItemIndex].quantity *
        updatedCartItems[existingItemIndex].price;
      setCartItems(updatedCartItems);
    } else {
      // If the product is new, add it to the cart
      setCartItems([...cartItems, newItem]);
    }
  };

  // Remove a product from the cart
  const removeFromCart = (id, size) => {
    const updatedCartItems = cartItems.filter(
      (item) => !(item.id === id && item.size === size)
    );
    setCartItems(updatedCartItems);
  };

  // Update the quantity of a product in the cart
  const updateQuantity = (id, size, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity from going below 1
    const updatedCartItems = cartItems.map((item) =>
      item.id === id && item.size === size
        ? { ...item, quantity: newQuantity, total: newQuantity * item.price }
        : item
    );
    setCartItems(updatedCartItems);
  };

  // Reset the cart
  const resetCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, resetCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);