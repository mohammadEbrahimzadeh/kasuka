import React from "react";
import { RiTaskFill } from "@react-icons/all-files/ri/RiTaskFill";

export default function AdsItem() {
  return (
    <>
      <li className="list-group-item    col-sm-12 col-6   flex-row   d-flex">
        <div className="d-flex  ms-1 text-warning align-items-center ">
          <RiTaskFill className="IconLi "></RiTaskFill>
        </div>
        <div className=" d-flex   align-items-start justify-content-center p-sm-2   flex-column ">
          <h3 className="m-0">تبلیغات</h3>
          <p className="m-0">
            متن نمایشی متن نمایشی متن نمایشی متن نمایشی متن لمایشی متن{" "}
          </p>
        </div>
      </li>{" "}
    </>
  );
}
