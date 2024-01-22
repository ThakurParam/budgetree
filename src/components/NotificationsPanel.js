import { Avatar, Grid, IconButton, Popover, Typography } from "@mui/material";
import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Box } from "@mui/system";
export const NotificationsPanel = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleNotificationsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationsClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const notificationsPopover = (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleNotificationsClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Box sx={{ p: 2, width: "400px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <p style={{ fontWeight: 700 }}>Notifications</p>{" "}
                <p style={{ marginLeft: "10px", fontWeight: 700 }}>All</p>
              </div>
              <div style={{ marginLeft: "25px" }}>
                <p style={{ fontWeight: 700 }}>Mark all as read </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            {[...Array(8)].map(() => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <div>
                  <Avatar
                    alt="User Avatar"
                    src="/path/to/avatar.jpg"
                    sx={{ cursor: "pointer", height: "40px", width: "40px" }}
                    size={64}
                  />
                </div>
                <div style={{ marginLeft: "20px", marginTop: "-20px" }}>
                  <p style={{ fontWeight: 700 }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <p
                    style={{
                      fontWeight: 600,
                      opacity: 0.6,
                      marginTop: "-10px",
                    }}
                  >
                    Last Wednesday at 9:42 AM
                  </p>
                </div>
              </div>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Popover>
  );

  return (
    <>
      <IconButton color="black" onClick={handleNotificationsClick}>
        <NotificationsIcon sx={{ fontSize: "40px", margin: "20px" }} />
      </IconButton>
      {notificationsPopover}
    </>
  );
};
