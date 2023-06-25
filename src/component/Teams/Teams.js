import React from "react";
import team1 from "./img/team-1.jpg";
import team2 from "./img/team-2.jpg";
import team3 from "./img/team-3.jpg";
import team4 from "./img/team-4.jpg";
export default function Teams() {
  return (
    <div className="Teams  col-12  p-sm-5 p-3">
      <div>
        <h2 className=" mb-3 mb-sm-4 d-flex align-items-center"> تیم ما</h2>
      </div>
      <div className="d-flex    align-items-center   flex-wrap   justify-content-evenly   ">
        <div className=" col-sm-2 col-5  ">
          <img className="w-100" src={team1} alt="" />
          <p>والتر وایت</p>
        </div>
        <div className=" col-sm-2 col-5">
          <img className="w-100" src={team2} alt="" />
          <p>سارا برلین</p>
        </div>
        <div className=" col-sm-2 col-5 ">
          <img className="w-100" src={team3} alt="" />
          <p>جان جوهانسون</p>
        </div>
        <div className=" col-sm-2 col-5 ">
          <img className="w-100" src={team4} alt="" />
          <p>ماریا گرانده</p>
        </div>
      </div>
    </div>
  );
}
