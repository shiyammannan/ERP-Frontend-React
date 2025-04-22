import React from "react";
import Breadcrumbs from "./components/BreadCrumbs";
import Card from "./components/Card";
import Chart from "./components/Chart";
import CourseRanking from "./components/CourseRanking";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import "./css/Home.css";

const HomePage = () => {
  const lineChartData = {
    options: {
      chart: {
        id: "line-chart",
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      },
    },
    series: [
      {
        name: "Sales",
        data: [30, 40, 35, 50, 49, 60],
      },
    ],
  };

  const pieChartData = {
    options: {
      chart: {
        id: "pie-chart",
      },
      labels: ["Team A", "Team B", "Team C", "Team D"],
    },
    series: [44, 55, 13, 43],
  };

  const horizontalBarChartData = {
    options: {
      chart: {
        id: "horizontal-bar-chart",
        type: "bar",
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      xaxis: {
        categories: [
          "Thiruvarasan",
          "Shiyam",
          "Ajay",
          "Devsri",
          "Arul Jenifer",
          "Dhivya",
        ],
      },
    },
    series: [
      {
        name: "Sales",
        data: [30, 40, 35, 50, 49, 60],
      },
    ],
  };

  const breadcrumbs = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Dashboard", link: "/dashboard" },
  ];

  const topCourses = [
    { name: "Computer Science", mentor: "Dr. Smith" },
    { name: "Business Administration", mentor: "Prof. Johnson" },
    { name: "Mechanical Engineering", mentor: "Dr. Brown" },
  ];

  return (
    <div className="home-container">
      <div className="container mx-auto mt-4">
        <div className="p-4 bg-gradient-to-r from-violet-50 to-violet-50 rounded shadow-md">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-2xl md:text-4xl font-bold">Dashboard</h1>
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Card icon={faUsers} title="Total Students" content="2,000" />
            <Card icon={faUsers} title="Total Teachers" content="150" />
            <Card icon={faUsers} title="Total Classes" content="50" />
            <Card icon={faUsers} title="Total Staff" content="80" />
          </div>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Chart
              title="Annual Income Chart"
              options={lineChartData.options}
              series={lineChartData.series}
              type="line"
            />
            <Chart
              title="Team Distribution"
              options={pieChartData.options}
              series={pieChartData.series}
              type="pie"
            />
          </div>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Chart
              title="Sales by Person"
              options={horizontalBarChartData.options}
              series={horizontalBarChartData.series}
              type="bar"
            />
            <CourseRanking courses={topCourses} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
