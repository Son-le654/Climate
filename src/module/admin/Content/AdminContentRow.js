import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Column } from "@ant-design/plots";

const AdminContentRow = () => {
  const data = [
    {
      Type: "Check-in",
      Name: "Dr.Phong",
      Number: 20,
    },
    {
      Type: "Check-in",
      Name: "Dr.Son",
      Number: 28.8,
    },
    {
      Type: "Check-in",
      Name: "Dr.Tai",
      Number: 39.3,
    },
    {
      Type: "Check-in",
      Name: "Dr.Nghia",
      Number: 81.4,
    },
    {
      Type: "Check-in",
      Name: "Dr.Bien",
      Number: 47,
    },
    {
      Type: "Check-in",
      Name: "Dr.Dat",
      Number: 20.3,
    },
    {
      Type: "Check-in",
      Name: "Dr.Linh",
      Number: 24,
    },
    {
      Type: "Check-in",
      Name: "Dr.Trang",
      Number: 35.6,
    },
    {
      Type: "Completed",
      Name: "Dr.Phong",
      Number: 15,
    },
    {
      Type: "Completed",
      Name: "Dr.Son",
      Number: 20,
    },
    {
      Type: "Completed",
      Name: "Dr.Tai",
      Number: 34,
    },
    {
      Type: "Completed",
      Name: "Dr.Nghia",
      Number: 80,
    },
    {
      Type: "Completed",
      Name: "Dr.Bien",
      Number: 45,
    },
    {
      Type: "Completed",
      Name: "Dr.Dat",
      Number: 13,
    },
    {
      Type: "Completed",
      Name: "Dr.Linh",
      Number: 20,
    },
    {
      Type: "Completed",
      Name: "Dr.Trang",
      Number: 30,
    },
  ];
  const config = {
    data,
    isGroup: true,
    xField: "Name",
    yField: "Number",
    seriesField: "Type",
    label: {
      position: "middle",
      layout: [
        {
          type: "interval-adjust-position",
        },
        {
          type: "interval-hide-overlap",
        },
        {
          type: "adjust-color",
        },
      ],
    },
  };
  return (
    <div className="w-[100%] flex justify-center items-center">
      <Column {...config} className="w-[90%]" />;
    </div>
  );
};
export default AdminContentRow;
