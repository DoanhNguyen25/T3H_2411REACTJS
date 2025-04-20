import React from "react";

// props is read only
const Header = ({ value, setUser }) => {
  const function1 = () => {};
  const function2 = () => {};
  const function3 = () => {};
  return (
    <div>
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
