import React from "react";

import { Link } from "react-router-dom";

import Chart from "react-apexcharts";

import Statuscard from "../components/status-card/Statuscard";

import Table from "../components/table/Table";

import Badge from "../components/badge/Badge";

import statusCards from "../assets/JsonData/status-card-data.json";

const chartOptions = {
  series: [
    {
      name: "Online Customers",
      data: [40, 70, 20, 90, 30, 60, 23, 32, 78],
    },
    {
      name: "Store Customers",
      data: [34, 65, 76, 31, 76, 98, 43, 56, 97],
    },
  ],
  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May ",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    legend: {
      position: "bottom",
    },
    gird: {
      show: false,
    },
  },
};

const topCustomers = {
  head: ["user", "total orders", "total spending"],
  body: [
    {
      username: "Nguyen Ha",
      oder: "036",
      price: "$999,009",
    },
    {
      username: "Long Nguyen",
      oder: "213",
      price: "$3423,009",
    },
    {
      username: "Phu Nguyen",
      oder: "013",
      price: "$234324,234",
    },
    {
      username: "Nguyen Nhu",
      oder: "342",
      price: "$23234,324324",
    },
  ],
};

const renderCustomerHead = (item, index) => <th key={index}>{item}</th>;

const renderCustomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.oder}</td>
    <td>{item.price}</td>
  </tr>
);

const latestOrders = {
  header: ["order id", "user", "total price", "date", "status"],
  body: [
    {
      id: "#OD1711",
      user: "Nguyen Ha",
      date: "03 Jun 2022",
      price: "$990",
      status: "shipping",
    },
    {
      id: "#SH3251",
      user: "Nguyen Nguyen",
      date: "19 Mar 2022",
      price: "$450",
      status: "paid",
    },
    {
      id: "#NH4321",
      user: "Phu Nguyen",
      date: "13 May 2022",
      price: "$675",
      status: "pending",
    },
    {
      id: "#OI549",
      user: "U La Tr",
      date: "8 Sep 2022",
      price: "$342",
      status: "paid",
    },
    {
      id: "#OI549",
      user: "U La Tr",
      date: "8 Sep 2022",
      price: "$342",
      status: "paid",
    },
    {
      id: "#VF643",
      user: "Nhat Long",
      date: "21 Mar 2022",
      price: "$656",
      status: "refund",
    },
  ],
};

const orderStatus = {
  shipping: "primary",
  pending: "warning",
  paid: "success",
  refund: "danger",
};

const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

const renderOrderBody = (item, index) => (
  <tr>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.date}</td>
    <td>{item.price}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
);

const Dashboard = () => {
  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-6">
                <Statuscard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <div className="card full-height">
            {/* Chart */}
            <Chart
              options={chartOptions.options}
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h3>top customers</h3>
            </div>
            <div className="card__body">
              {/* table */}
              <Table
                headData={topCustomers.head}
                renderHead={(item, index) => renderCustomerHead(item, index)}
                bodyData={topCustomers.body}
                renderBody={(item, index) => renderCustomerBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">View all</Link>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card__header">
              <h3>latest orders</h3>
            </div>
            <div className="card__body">
              <Table
                headData={latestOrders.head}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={latestOrders.body}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">view all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
