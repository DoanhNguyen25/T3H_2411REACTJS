import React, { useContext } from "react";
import { RootContext } from "../App";

// props is read only
const Header = ({ value, setUser }) => {
  const { theme } = useContext(RootContext);
  return (
    <div
      style={{
        background: theme === "light" ? "#000" : "#fff",
        width: "100px",
        height: "100px",
      }}
    >
      Header{value}
      <button onClick={() => setUser("trung")}>trung</button>
      <button onClick={() => setUser("kiên")}>kiên</button>
    </div>
  );
};

export default Header;

const a = {
  age: "DOanh",
  name: 123,
};
