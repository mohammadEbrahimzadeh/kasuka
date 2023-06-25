import React from "react";

export default function Map() {
  return (
    <div className="Map p-3 p-sm-5 ">
      <h2>تماس با ما</h2>

      <div className="mapouter mt-3 mt-sm-5 col-12 ">
        <div className="gmap_canvas ">
          <iframe
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=%D8%AA%D8%B3%D9%84%DB%8C%D8%AD%D8%A7%D8%AA&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
