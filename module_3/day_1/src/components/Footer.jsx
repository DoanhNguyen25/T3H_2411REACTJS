import React, { useContext } from "react";
import { RootContext } from "../App";

const Footer = () => {
  const { setTheme } = useContext(RootContext);
  // console.log(data);
  return (
    <div>
      <button onClick={() => setTheme("light")}>set light mode</button>
      <button onClick={() => setTheme("dark")}>set dark mode</button>
    </div>
  );
};

export default Footer;
