import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Container, Typography } from "@mui/material";

export const Chart = () => {
  const data = [
    { name: "Category 1", value: 30 },
    { name: "Category 2", value: 45 },
    { name: "Category 3", value: 28 },
    { name: "Category 4", value: 60 },
    { name: "Category 5", value: 80 },
  ];
  return (
    // <Container>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        // margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
    // </Container>
  );
};
