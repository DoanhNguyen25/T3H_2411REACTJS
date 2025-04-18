import { Formik } from "formik";
import "./App.css";
import Layout from "./components/Layout";
import { createContext, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const RootContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <RootContext.Provider value={{ theme, setTheme }}>
      {/* <Layout>
        <Header />
        <Footer />
      </Layout> */}

      
    </RootContext.Provider>
  );
}

export default App;
