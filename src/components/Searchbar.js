import React from "react";

import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";

export const Searchbar = () => {
  return (
    <div
      style={{
        display: "flex",
        borderRadius: "30px",
        overflow: "hidden",
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "#f5f7fa",
      }}
    >
      <InputAdornment
        position="start"
        style={{ marginTop: "25px", marginLeft: "10px" }}
      >
        <SearchIcon />
      </InputAdornment>
      <input
        type="text"
        placeholder="Search for something"
        style={{
          width: "100%",
          padding: "10px",
          border: "none",
          outline: "none",
          borderRadius: "0 30px 30px 0",
          backgroundColor: "#f5f7fa",
          height: "30px",
        }}
      />
    </div>
  );
};
