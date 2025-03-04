import React from "react";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <header>
      <Nav />
      {children}
      <Footer />
    </header>
  );
};

export default Layout;
