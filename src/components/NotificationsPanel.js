import { Grid, Popover } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const NotificationsPanel = ({ anchorEl, onClose }) => {
  return (
    <>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={onClose}
        // anchorOrigin={{
        //   vertical: "bottom",
        //   horizontal: "right",
        // }}
        // transformOrigin={{
        //   vertical: "top",
        //   horizontal: "right",
        // }}
      >
        {/* Your notifications panel content */}
        <div>
          {/* ... */}hello sir
          <button onClick={onClose}>Close</button>
        </div>
      </Popover>
    </>
  );
};
{
  /* <Box sx={{ width: "30%", height: "auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            hello
          </Grid>
          <Grid item xs={6}>
            {" "}
            hello
          </Grid>
        </Grid> */
}
