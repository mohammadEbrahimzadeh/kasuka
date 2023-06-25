import React from "react";
import imgAds from "./img/about.jpg";
import AdsItem from "./AdsItem/AdsItem";
export default function Ads() {
  return (
    <div className="Ads d-flex container-fluid p-md-5 px-3 ">
      <div className="right d-none d-sm-flex  col-4  ms-4  justify-content-center align-items-center p-0">
        <img className="w-100  " src={imgAds} alt="img" />
      </div>
      <div className=" left col-sm-7 col-12    m-0   justify-content-center align-items-center  d-flex">
        <ul className=" list-group col-12 flex-wrap  flex-sm-column col-12 d-flex flex-row list-unstyled  ">
          <AdsItem></AdsItem>
          <AdsItem></AdsItem>
          <AdsItem></AdsItem>
          <AdsItem></AdsItem>
        </ul>
      </div>
    </div>
  );
}
