import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);
  const [showUserClick, setShowUserClick] = useState("");
  const [value, setValue] = useState();

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleSetUser = (userName) => {
    setShowUserClick(userName);
  };
  const handleOnchange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Layout>
      {showUserClick}
      <Header value={count} setUser={handleSetUser} />

      <input type="text" onChange={handleOnchange} value={value} />

      <button onClick={() => alert(`giá trị của ô input ${value}`)}>
        save
      </button>
    </Layout>
  );
}

export default App;
