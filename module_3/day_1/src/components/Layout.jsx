import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CustomButton from "./CustomButton";

const Layout = (props) => {
  console.log(props.children);
  return (
    <>
      <Header />
      {props.children}
      <CustomButton />
      <Footer />
    </>
  );
};

export default Layout;
