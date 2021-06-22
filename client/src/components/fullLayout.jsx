import React, { Fragment, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Layout from "./layout";
import Header from "./header";
import jwt from "jsonwebtoken";

const FullLayout = ({ history, match }) => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    async function auth() {
      const readToken = localStorage.getItem("token");
      if (!readToken) {
        return history.push("/");
      } else {
        let { payload } = await jwt.decode(readToken, { complete: true });
        let { uuid } = payload.token;
        if (match.params.uuid === uuid) {
          return setToggle(true);
        } else {
          history.push("/");
        }
      }
    }

    auth();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {toggle ? (
        <>
          <Header />
          <Layout />
        </>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default withRouter(FullLayout);
