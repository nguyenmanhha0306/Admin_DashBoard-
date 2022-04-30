import React from "react";

import "./calendars.css";

// document.querySelector(".dark-mode-switch").onClick = () => {
//   document.querySelector(".light").classList.toggle("dark");
//   document.querySelector(".light").classList.toggle("light");
// };

const Calendars = () => {
  return (
    <div className="light">
      <div className="calendar">
        <div className="calender-header">
          <span className="month-picker" id="month-picker">
            April
          </span>
          <div className="year-picker">
            <span className="year-change" id="prev-year">
              <pre>{`<`}</pre>
            </span>
            <span id="year">2022</span>
            <span className="year-change" id="next-year">
              <pre>{`>`}</pre>
            </span>
          </div>
        </div>

        <div className="calendar-body">
          <div className="calender-week-day">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div className="calendar-days">
            <div>
              1<span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
          </div>
        </div>

        <div className="calendar-footer">
          <div className="toggle">
            <span>Dark Mode</span>
            <div className="dark-mode-switch">
              <div className="dark-mode-witch-ident"></div>
            </div>
          </div>
        </div>

        <div className="month-list"></div>
      </div>
    </div>
  );
};

export default Calendars;
