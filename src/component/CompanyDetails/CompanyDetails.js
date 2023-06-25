import React from "react";
import imgDetails from "./img/about.jpg";
export default function CompanyDetails() {
  return (
    <div
      className="CompanyDetails d-flex justify-content-center align-items-center 
     container-fluid p-md-5 mt-sm-5  p-3"
    >
      <div className="right p-3  col-sm-6 col-12 ms-4 ">
        <h3>شرکت دیجیتال کاسوکا</h3>
        <p className="mt-3 mt-sm-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
          laudantium error unde sint dicta quod exercitationem sit ratione animi
          maiores perferendis corrupti soluta tenetur totam omnis rerum, alias
          vitae minima? Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Eos laudantium error unde sint dicta quod exercitationem sit
          ratione animi maiores perferendis corrupti soluta tenetur totam omnis
          rerum, alias vitae minima? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Eos laudantium error unde sint dicta quod
          exercitationem sit ratione animi maiores perferendis corrupti soluta
          tenetur totam omnis rerum, alias vitae minima?
        </p>
      </div>
      <div className=" left col-5 d-none d-sm-flex justify-content-center align-items-center ">
        <img className="w-100 " src={imgDetails} alt="imgDetails" />
      </div>
    </div>
  );
}
