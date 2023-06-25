import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu.esm";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose.esm";
export default function HamburgerMenu() {
  const [isOpen, setisOpen] = useState(false);
  const [IsVisibale, setIsVisibale] = useState("");
  let menuVisibale = "";
  function menufunc() {
    setisOpen(!isOpen);
    menuVisibale = isOpen ? " close" : "open";
    setIsVisibale(menuVisibale);
  }
  return (
    <>
      <div className="divContainerIcon d-sm-none" onClick={menufunc}>
        {isOpen ? (
          <AiOutlineClose className="openIcon "></AiOutlineClose>
        ) : (
          <AiOutlineMenu className="openIcon "></AiOutlineMenu>
        )}
      </div>
      <div className={`HamburgerMenu d-sm-none  pt-5 ${IsVisibale}  `}>
        <div className="d-flex flex-column justify-content-evenly gap-3 align-items-center">
          <Link
            className=" text-center p-2 text-decoration-none border-0  btnMenu fw-bold  col-12  "
            to="#"
          >
            خانه
          </Link>
          <Link
            className="text-center p-2 text-decoration-none btnMenu fw-bold col-12    "
            to="#"
          >
            درباره ما
          </Link>
          <Link
            className="text-center p-2 text-decoration-none btnMenu fw-bold  col-12  "
            to="#"
          >
            خدمات
          </Link>
          <Link
            className="text-center p-2 text-decoration-none btnMenu fw-bold  col-12  "
            to="#"
          >
            نمونه کارها
          </Link>
          <Link
            className="text-center p-2 text-decoration-none btnMenu fw-bold   col-12  "
            to="#"
          >
            تیم
          </Link>
          <Link
            className="text-center p-2 text-decoration-none btnMenu fw-bold  col-12 "
            to="#"
          >
            لیست کشویی
          </Link>
          <Link
            className="text-center p-2 text-decoration-none btnMenu  fw-bold   col-12 "
            to="#"
          >
            تماس با ما
          </Link>
        </div>
      </div>
    </>
  );
}
