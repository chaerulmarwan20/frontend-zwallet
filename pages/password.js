import React from "react";
import Layout from "../components/base/Layout";
import Main from "../parts/ChangePassword";

export default function password() {
  return (
    <>
      <Layout title="Change Password" className="change-password">
        <Main></Main>
      </Layout>
    </>
  );
}
