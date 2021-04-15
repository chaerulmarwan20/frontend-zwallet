import { React, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function index() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <section className="change-pin">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="sidebar d-flex flex-column justify-content-between p-5">
              <div className="main-menu d-flex flex-column justify-content-between">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/grid-grey.png"
                    width={28}
                    height={28}
                    alt="Dashboard"
                  />
                  <Link href="#">
                    <a className="ml-4">Dashboard</a>
                  </Link>
                </div>
                <div className="d-flex align-items-center mt-5">
                  <Image
                    src="/images/arrow-up-grey.png"
                    width={28}
                    height={28}
                    alt="Transfer"
                  />
                  <Link href="#">
                    <a className="ml-4">Transfer</a>
                  </Link>
                </div>
                <div className="d-flex align-items-center mt-5">
                  <Image
                    src="/images/plus-grey.png"
                    width={28}
                    height={28}
                    alt="Top Up"
                  />
                  <Link href="#">
                    <a className="ml-4">Top Up</a>
                  </Link>
                </div>
                <div className="d-flex align-items-center mt-5 active">
                  <Image
                    src="/images/user-blue.png"
                    width={28}
                    height={28}
                    alt="Profile"
                  />
                  <Link href="#">
                    <a className="ml-4 active">Profile</a>
                  </Link>
                </div>
              </div>
              <div className="logout-menu">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/log-out-grey.png"
                    width={28}
                    height={28}
                    alt="Log Out"
                  />
                  <Link href="#">
                    <a className="ml-4">Log Out</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="details p-5">
              <h1>Change PIN</h1>
              <p className="mt-3">
                Enter your current 6 digits Zwallet PIN below to <br /> continue
                to the next steps.
              </p>
              {showSuccess === true && (
                <p>
                  Type your new 6 digits security PIN to use in <br /> Zwallet.
                </p>
              )}
              <form>
                <div className="row">
                  <div className="col-md-2">
                    <input type="text" className="form-control pin" />
                  </div>
                  <div className="col-md-2">
                    <input type="text" className="form-control pin" />
                  </div>
                  <div className="col-md-2">
                    <input type="text" className="form-control pin" />
                  </div>
                  <div className="col-md-2">
                    <input type="text" className="form-control pin" />
                  </div>
                  <div className="col-md-2">
                    <input type="text" className="form-control pin" />
                  </div>
                  <div className="col-md-2">
                    <input type="text" className="form-control pin" />
                  </div>
                </div>
                <button type="button" className="btn btn-continue mt-5">
                  Continue
                </button>
                {showSuccess === true && (
                  <button type="button" className="btn btn-pin mt-5">
                    Change PIN
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
