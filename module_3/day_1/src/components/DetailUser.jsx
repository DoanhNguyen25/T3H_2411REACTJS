import React from "react";

const DetailUser = ({ id }) => {
  console.log(id);
  return <div>DetailUser {id}</div>;
};

export default DetailUser;
fetch(`https://dummyjson.com/users/${id}`);
