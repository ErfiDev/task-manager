import React, { Fragment } from "react";
import Header from "./components/header";
import Layout from "./components/layout";
import Footer from "./components/footer";
import "./styles/index.scss";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Layout />
      <Footer />
    </Fragment>
  );
};

export default App;
