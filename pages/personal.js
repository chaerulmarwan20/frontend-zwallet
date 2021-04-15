import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../parts/PersonalInformation";
import Footer from "../components/Footer";

export default function personal() {
  return (
    <>
      <Head>
        <title>Zwallet | Personal Information</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}