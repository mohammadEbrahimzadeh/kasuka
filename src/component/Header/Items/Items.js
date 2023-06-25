import React from "react";

import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
export default function Items() {
  return (
    <div className="Items">
      <div className="d-flex  justify-content-center flex-column align-items-center">
        <AssignmentTurnedInIcon className=" AssignmentTurnedInIcon"></AssignmentTurnedInIcon>
        <h5 className="mt-3 text-center">متن نمایشی</h5>
      </div>
    </div>
  );
}
