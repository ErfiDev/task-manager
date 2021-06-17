import React, { Fragment } from "react";
import Layout from "./layout";
import Header from "./header";

const FullLayout = () => {
  return (
    <Fragment>
      <Header />
      <Layout />
    </Fragment>
  );
};

export default FullLayout;
