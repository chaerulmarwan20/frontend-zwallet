import { React, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function index() {
  const [type, setType] = useState("password");

  const handleToggle = () => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
  };

  return (
    <>
      <Head>
        <title>Zwallet | Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="sign-up py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7 main">
              <div className="row">
                <div className="col-md-12">
                  <Link href="#">
                    <a className="zwallet">Zwallet</a>
                  </Link>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12 d-flex">
                  <div className="image-1">
                    <Image
                      src="/images/phone2.png"
                      alt="Phone2"
                      width={278}
                      height={530}
                      className="phone-2"
                    />
                  </div>
                  <div className="image-2">
                    <Image
                      src="/images/phone.png"
                      alt="Phone"
                      width={278}
                      height={536}
                      className="phone"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <h1>App that Covering Banking Needs.</h1>
                </div>
                <div className="col-md-12 mt-3">
                  <p>
                    Zwallet is an application that focussing in banking needs
                    for all users <br /> in the world. Always updated and always
                    following world trends. <br /> 5000+ users registered in
                    Zwallet everyday with worldwide <br /> users coverage.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 aside">
              <h1 className="mt-5">
                Start Accessing Banking Needs <br /> With All Devices and All
                Platforms <br />
                With 30.000+ Users
              </h1>
              <p className="mt-3">
                Transfering money is eassier than ever, you can access <br />
                Zwallet wherever you are. Desktop, laptop, mobile phone? <br />
                we cover all of that for you!
              </p>
              <form className="mt-5">
                <div className="form-group person">
                  <img
                    src="/images/person-grey.png"
                    width={24}
                    height={24}
                    alt="Person"
                    className="person-img"
                  />
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    id="text"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="form-group mail">
                  <img
                    src="/images/mail-grey.png"
                    width={24}
                    height={24}
                    alt="Mail"
                    className="mail-img"
                  />
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Enter your e-mail"
                  />
                </div>
                <div className="form-group password">
                  <img
                    src="/images/lock-grey.png"
                    width={24}
                    height={24}
                    alt="Lock"
                    className="password-img"
                  />
                  <input
                    type={type}
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Create your password"
                  />
                  <img
                    src="/images/eye-crossed.png"
                    width={24}
                    height={24}
                    alt="Eye"
                    className="eye-img"
                    onClick={handleToggle}
                  />
                </div>
              </form>
              <br />
              <button type="button" className="btn btn-sign-up mt-5">
                Sign Up
              </button>
              <p className="text-center mt-5 account">
                Already have an account? Let’s{" "}
                <Link href="#">
                  <a>Login</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}