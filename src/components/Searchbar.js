import React from "react";

import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";

export const Searchbar = () => {
  return (
    <TextField
      variant="outlined"
      fullWidth
      placeholder="Search for something"
      sx={{ border: "none", outline: "none" }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon
              style={{
                // borderRadius: "0 20px 20px 0",
                // backgroundColor: "#f0f0f0",
                padding: "10px",
              }}
            />
          </InputAdornment>
        ),
      }}
    />
  );
};
