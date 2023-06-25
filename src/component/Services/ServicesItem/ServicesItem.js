import React from "react";
import { GrServices } from "@react-icons/all-files/gr/GrServices";
import { Link } from "react-router-dom";
export default function ServicesItem() {
  return (
    <div className=" ServicesItem col-3  text-justify m-sm-4 m-3 d-flex flex-column  align-items-center">
      <GrServices className="GrServices  p-2 "></GrServices>
      <h3 className="mt-3">
        {" "}
        <Link to={""} className="Link ">
          لورم ایپسوم
        </Link>{" "}
      </h3>
      <p className="mt-sm-3">
        متن نمایشی در تگ مذکور متن نمایشی در تگ مذکور متن نمایشی در تگ مذکور
      </p>
    </div>
  );
}
