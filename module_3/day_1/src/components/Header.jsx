import React from "react";

// props is read only
const Header = (props) => {
  const { name } = props;
  console.log("giá trị các properties", name);
  return <div>Header</div>;
};

export default Header;

const a = {
  age: "DOanh",
  name: 123,
};
