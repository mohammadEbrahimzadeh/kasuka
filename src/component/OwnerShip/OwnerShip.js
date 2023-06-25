import React from "react";
import imgOwnerShip from "./img/testimonials-3.jpg";
import { Pagination } from "react-bootstrap";

export default function OwnerShip() {
  return (
    <div className="OwnerShip p-sm-4 p-2 d-flex flex-column justify-content-center align-items-center">
      <img className="rounded-circle " src={imgOwnerShip} alt="" />
      <h3 className="m-3">خانوم ایکس</h3>
      <p className="">صاحب محموعه</p>
    </div>
  );
}
