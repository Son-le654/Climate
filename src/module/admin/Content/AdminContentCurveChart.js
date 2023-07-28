import React, { useState, useEffect } from "react";
import { Pie } from "@ant-design/plots";

const AdminContentCurveChart = () => {
  const data = [
    {
      type: "Online",
      value: 50,
    },
    {
      type: "Completed",
      value: 25,
    },
    {
      type: "Cancel",
      value: 25,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
  return <Pie {...config} />;
};

export default AdminContentCurveChart;
