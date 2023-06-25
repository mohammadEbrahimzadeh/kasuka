import React from "react";
import ServicesItem from "./ServicesItem/ServicesItem";
export default function Services() {
  return (
    <div className="Services  p-sm-5 p-3 container-fluid">
      <h2 className="mb-3 col-12"> خدمات ما را برسی کنید</h2>
      <div className="d-flex flex-wrap justify-content-evenly col-12">
        <ServicesItem></ServicesItem>
        <ServicesItem></ServicesItem>
        <ServicesItem></ServicesItem>
        <ServicesItem></ServicesItem>
        <ServicesItem></ServicesItem>
        <ServicesItem></ServicesItem>
      </div>
    </div>
  );
}
