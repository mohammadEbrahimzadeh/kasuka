import React from "react";
import ImgGallary1 from "../WorkSamples/img/portfolio-1.jpg";
import ImgGallary2 from "../WorkSamples/img/portfolio-2.jpg";
import ImgGallary3 from "../WorkSamples/img/portfolio-3.jpg";
import ImgGallary4 from "../WorkSamples/img/portfolio-4.jpg";
import ImgGallary5 from "../WorkSamples/img/portfolio-5.jpg";
import ImgGallary6 from "../WorkSamples/img/portfolio-6.jpg";
import ImgGallary7 from "../WorkSamples/img/portfolio-7.jpg";
import ImgGallary8 from "../WorkSamples/img/portfolio-8.jpg";
import ImgGallary9 from "../WorkSamples/img/portfolio-9.jpg";
export default function WorkSamples() {
  return (
    <div className="WorkSamples p-sm-5 p-3 ">
      <h2>نمونه کار ها</h2>
      <div className="d-flex mb-4 justify-content-center align-items-center col-12">
        <ul className="list-group d-flex flex-row border-2">
          <li className="list-group-item active ">1</li>
          <li className="list-group-item">2</li>
          <li className="list-group-item">3</li>
          <li className="list-group-item">4</li>
        </ul>
      </div>
      <div className="gallery d-grid p-sm-4 p-3 ">
        <div className="gridItem1">
          {" "}
          <img className="w-100 h-100 " src={ImgGallary1} alt="" />
        </div>
        <div className="gridItem2">
          {" "}
          <img className="w-100 h-100 " src={ImgGallary2} alt="" />
        </div>
        <div className="gridItem3">
          {" "}
          <img className="w-100 h-100" src={ImgGallary3} alt="" />
        </div>
        <div className="gridItem4">
          {" "}
          <img className="w-100 h-100" src={ImgGallary4} alt="" />
        </div>
        <div className="gridItem5">
          {" "}
          <img className="w-100 h-100" src={ImgGallary5} alt="" />
        </div>
        <div className="gridItem6">
          {" "}
          <img className="w-100 h-100" src={ImgGallary6} alt="" />
        </div>
        <div className="gridItem7">
          {" "}
          <img className="w-100 h-100" src={ImgGallary7} alt="" />
        </div>
        <div className="gridItem8">
          {" "}
          <img className="w-100 h-100" src={ImgGallary8} alt="" />
        </div>
        <div className="gridItem9">
          {" "}
          <img className="w-100 h-100" src={ImgGallary9} alt="" />
        </div>
      </div>
    </div>
  );
}
