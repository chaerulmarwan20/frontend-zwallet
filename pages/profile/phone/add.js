import React from "react";
import Layout from "../../../components/base/Layout";
import Main from "../../../parts/Phone";

export default function add() {
  return (
    <>
      <Layout title="Add Phone Number" className="phone" active="profile">
        <Main></Main>
      </Layout>
    </>
  );
}
