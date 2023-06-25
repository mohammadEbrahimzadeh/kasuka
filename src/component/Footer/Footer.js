import React from "react";

import logo from "./img/logo.png";
import logo2 from "./img/client-1.png";
import { ImTwitter } from "@react-icons/all-files/im/ImTwitter.esm";
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook.esm";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram.esm";
import { AiFillSkype } from "@react-icons/all-files/ai/AiFillSkype.esm";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin.esm";
export default function Footer() {
  return (
    <div className="Footer col-12 bg-dark gap-sm-3 gap-1 p-sm-5 p-3 d-flex justify-content-evenly align-items-center  ">
      <div className="col-4  rightSide justify-content-center  d-flex flex-column align-items-center  ">
        <div className="d-flex justify-content-center align-items-center  col-10   ">
          <img className="w-50  h-50" src={logo} alt="" />
          <img className="w-50 h-50" src={logo2} alt="" />
        </div>
        <div className="col-12">
          <p className="m-0"> ادرس: تهران خیابان ... </p>
          <p className="m-0">شماره تماس: 091226478574</p>
          <p>ایمیل : irib@gmail.com</p>
        </div>
        <div className="justify-content-evenly col-12  d-flex mt-sm-3 mt-1">
          <ul className="list-group list-unstyled justify-content-evenly col-12 d-flex flex-row">
            <li>
              <ImTwitter></ImTwitter>
            </li>
            <li>
              <AiFillFacebook></AiFillFacebook>
            </li>
            <li>
              <AiOutlineInstagram></AiOutlineInstagram>
            </li>
            <li>
              <AiFillSkype></AiFillSkype>
            </li>
            <li>
              <AiFillLinkedin></AiFillLinkedin>
            </li>
          </ul>
        </div>
      </div>
      <div className="centerSIde  gap-sm-3 gap-1 col-sm-2  col-4 d-flex flex-column  ">
        <h6>لینک های مفید</h6>
        <ul className="list-group gap-sm-4 gap-2 pe-2 list-unstyled">
          <li>خانه</li>
          <li>درباره ما</li>
          <li>خدمات</li>
          <li>شرایط استفاده</li>
          <li> سیاست حریم خصوصی</li>
        </ul>
      </div>
      <div className="centerSIde  gap-sm-3 gap-1 col-sm-2 col-4  d-flex  flex-column  ">
        <h6>لینک های مفید</h6>
        <ul className="list-group  gap-sm-4 gap-2 pe-2 list-unstyled">
          <li>طراحی سایت</li>
          <li>توسعه وب</li>
          <li>مدیریت تولید</li>
          <li>بازاریابی</li>
          <li> طراحی گرافیک</li>
        </ul>
      </div>
      <div className="col-4      d-none d-sm-block  d-flex flex-column gap-5 leftSid  ">
        <div className="">
          <h6 className="">خبرنامه ما</h6>
          <p className="mt-sm-4 mt-2">ما به دنبال بهترن ها برای شما هستیم</p>
        </div>

        <div className="d-flex mt-5   justify-content-center flex-wrap">
          <input type="text" />
          <button className="btn ">دنبال کردن</button>
        </div>
      </div>
    </div>
  );
}
