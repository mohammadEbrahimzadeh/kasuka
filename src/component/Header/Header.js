import React from "react";
import Navbar from "./Navbar/Navbar";
import Content from "./Content/Content";
import Items from "./Items/Items";
export default function Header() {
  return (
    <div className="Header flex-column  justify-content-center container-fluid d-flex  align-items-center">
      <Navbar></Navbar>
      <Content></Content>
      <div className="  d-flex align-items-center justify-content-center  container-fluid">
        <div className=" d-flex col-12  align-items-center gap-4 justify-content-center row row-cols-3  row-cols-md-6 ">
          <Items></Items>
          <Items></Items>
          <Items></Items>
          <Items></Items>
          <Items></Items>
        </div>
      </div>
    </div>
  );
}
