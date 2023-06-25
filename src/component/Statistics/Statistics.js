import React from "react";
import imgAds from "./img/about.jpg";
import ItemStatistics from "./ItemStatistics/ItemStatistics";
export default function Statistics() {
  return (
    <div className="Statistics d-flex justify-content-center   col-12 p-sm-5">
      <div className="right d-sm-flex  d-none col-4 ms-4    justify-content-center align-items-center p-0">
        <img className="w-100 " src={imgAds} alt="img" />
      </div>
      <div className=" left  col-sm-7  col-12 flex-column justify-content-center align-items-center  d-flex">
        <div className="col-12">
          <h2 className="text-sm-end text-center">
            شایسته ترین ها متعلق به شماس
          </h2>
          <p className="m-sm-3   m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nihil
            ex obcaecati accusamus.
          </p>
        </div>
        <ul className=" list-group col-12 justify-content-center align-items-center flex-wrap  flex-row d-flex list-unstyled  ">
          <ItemStatistics></ItemStatistics>
          <ItemStatistics></ItemStatistics>
          <ItemStatistics></ItemStatistics>
          <ItemStatistics></ItemStatistics>
        </ul>
      </div>
    </div>
  );
}
