import React from "react";
import { BiMap } from "@react-icons/all-files/bi/BiMap.esm";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail.esm";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt.esm";
export default function Form() {
  function subMitForm(event) {
    event.preventDefault();
  }
  return (
    <div className="p-sm-5 Form justify-content-center align-items-center  col-12 p-3 d-flex">
      <div className="right col-4 ">
        <ul className="list-group gap-sm-5 gap-3 d-flex flex-wrap   list-unstyled">
          <li className="d-flex    justify-content-center align-items-center gap-3">
            <div className="icon d-flex flex-column justify-content-center">
              <BiMap></BiMap>
            </div>
            <div className="content  d-flex flex-column justify-content-center ">
              <h3>مکان:</h3>
              <p className="p-0 m-0">تهران خیابان ...</p>
            </div>
          </li>{" "}
          <li className="d-flex    justify-content-center align-items-center gap-3">
            <div className="icon d-flex flex-column justify-content-center">
              <AiOutlineMail></AiOutlineMail>
            </div>
            <div className="content  d-flex flex-column justify-content-center ">
              <h3>ایمیل:</h3>
              <p className="p-0 m-0">irib@gmail.com</p>
            </div>
          </li>{" "}
          <li className="d-flex    justify-content-center align-items-center gap-3">
            <div className="icon d-flex flex-column justify-content-center">
              <FaPhoneAlt></FaPhoneAlt>
            </div>
            <div className="content  d-flex flex-column justify-content-center ">
              <h3>شماره تماس:</h3>
              <p className="p-0 m-0"> 09122647874</p>
            </div>
          </li>{" "}
        </ul>
      </div>

      <div className="left p-3 col-8 gap-2    ">
        <form
          action="#"
          className="col-12 gap-sm-4 gap-2  d-flex flex-column justify-content-center align-items-center h-100"
          onSubmit={subMitForm}
        >
          <div className="gap-3 align-self-start  d-flex">
            <input type="text" className="col-4" placeholder="نام" />
            <input type="text" className="col-6" placeholder="ایمیل" />
          </div>

          <input type="text" className="col-12" placeholder="عنوان" />
          <textarea className="col-12 " rows="10" placeholder="پیام" />
          <button className="btn d-flex mt-sm-3 mt-1" type="submit">
            ارسال پیام
          </button>
        </form>
      </div>
    </div>
  );
}
