import React from "react";
import { Link } from "react-router-dom";

import logo from "../img/logo.png";
import logo2 from "../img/client-1.png";
export default function Navbar() {
  return (
    <div className="Navbar col-12 d-flex d-sm-flex d-none p-3 justify-content-evenly align-items-center">
      <div className="d-flex  m-3 col-1 align-items-center justify-content-center">
        <img className="w-100 " src={logo} alt="lego" />
        <img className="w-100 " src={logo2} alt="lego" />
      </div>
      <div className=" d-flex col-9 align-items-center justify-content-center ">
        <Link className="btn  btnNavbar fw-bold m-lg-3  " to="#">
          خانه
        </Link>
        <Link className="btn btnNavbar fw-bold m-lg-3  fs-lg-1" to="#">
          درباره ما
        </Link>
        <Link className="btn btnNavbar fw-bold m-lg-3 " to="#">
          خدمات
        </Link>
        <Link className="btn btnNavbar fw-bold m-lg-3" to="#">
          نمونه کارها
        </Link>
        <Link className="btn btnNavbar fw-bold m-lg-3 " to="#">
          تیم
        </Link>
        <Link className="btn btnNavbar fw-bold m-lg-3 " to="#">
          لیست کشویی
        </Link>
        <Link className="btn btnNavbar  fw-bold m-lg-3" to="#">
          تماس با ما
        </Link>
      </div>
      <button className="btnStartInNavbar d-flex  align-items-center justify-content-center btn m-3 col-1 btnNavbar ">
        شروع
      </button>
    </div>
  );
}
