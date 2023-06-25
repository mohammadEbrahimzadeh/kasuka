import React from "react";
import itemSlider1 from "./img/client-2.png";
import itemSlider2 from "./img/client-3.png";
import itemSlider3 from "./img/client-4.png";
import itemSlider4 from "./img/client-5.png";
import itemSlider5 from "./img/client-6.png";
import itemSlider6 from "./img/client-7.png";
import { Pagination } from "react-bootstrap";

export default function Slider() {
  return (
    <div className="Slider   d-flex flex-column justify-content-center align-items-center container-fluid ">
      <div className=" p-sm-5 p-3 sliderCont justify-content-center   align-items-center  gap-sm-5   flex-wrap d-flex">
        {" "}
        <div className="col-sm-2 col-md-2 col-3 m-3 col-lg-3 me-md-5 ">
          <img
            className="  w-100 h-100  "
            src={itemSlider1}
            alt="itemSlider1"
          />
        </div>
        <div className="col-sm-2 col-md-2 col-3 m-3 col-lg-3 me-md-5">
          <img className="  w-100 h-100 " src={itemSlider2} alt="itemSlider2" />
        </div>
        <div className="col-sm-2 col-md-2 col-3 m-3 col-lg-3 me-md-5 ">
          <img
            className="  w-100 h-100  "
            src={itemSlider3}
            alt="itemSlider3"
          />
        </div>
        <div className="col-sm-2 col-md-2 col-3 m-3 col-lg-3 me-md-5 ">
          <img
            className="  w-100 h-100  "
            src={itemSlider4}
            alt="itemSlider4"
          />
        </div>
        <div className="col-sm-2 col-md-2 col-3 m-3 col-lg-3 me-md-5">
          {" "}
          <img
            className="  w-100 h-100  "
            src={itemSlider5}
            alt="itemSlider5"
          />
        </div>
        <div className="col-sm-2 col-md-2 col-3 m-3 col-lg-3 me-md-5  ">
          <img
            className="  w-100 h-100  "
            src={itemSlider6}
            alt="itemSlider6"
          />
        </div>
      </div>
      <Pagination>
        <Pagination.Item className="iconPagenaiton">○</Pagination.Item>
        <Pagination.Item className="iconPagenaiton ">◉</Pagination.Item>
        <Pagination.Item className="iconPagenaiton">○</Pagination.Item>
        <Pagination.Item className="iconPagenaiton">○</Pagination.Item>
        <Pagination.Item className="iconPagenaiton">○</Pagination.Item>
      </Pagination>
    </div>
  );
}
