import React from "react";

import Statuscard from "../components/status-card/Statuscard";

import statusCards from "../assets/JsonData/status-card-data.json";
const Dashboard = () => {
  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-6">
                {/* status card here */}
                {item.title}
                <Statuscard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
