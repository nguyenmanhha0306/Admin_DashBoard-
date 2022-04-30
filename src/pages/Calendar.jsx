import React from "react";

import Calenders from "../components/calendar/Calendars";
const Calendar = () => {
  return (
    <div>
      <h2 className="page-header"> Calendar</h2>
      <div className="row">
        <div className="col-12">
          <div className="card__calendar">
            <Calenders />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
