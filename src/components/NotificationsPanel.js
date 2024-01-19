import { IconButton, Popover, Typography } from "@mui/material";
import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
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
      <Typography sx={{ p: 2 }}>Notification Content Goes Here</Typography>
    </Popover>
  );

  return (
    <>
      <IconButton color="inherit" onClick={handleNotificationsClick}>
        <NotificationsIcon />
      </IconButton>
      {notificationsPopover}
    </>
  );
};
