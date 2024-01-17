import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { Profilecard } from "./Profilecard";

export const Profilecard2 = () => {
  const [openProfile, setOpenProfile] = useState(false);

  const handleOpenProfile = () => {
    setOpenProfile(true);
  };

  const handleCloseProfile = () => {
    setOpenProfile(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpenProfile}>
        Open Profile
      </Button>
      <Dialog
        open={openProfile}
        onClose={handleCloseProfile}
        sx={{ width: "100%" }}
      >
        <DialogTitle>Profile</DialogTitle>
        <DialogContent>
          <Profilecard />
        </DialogContent>
      </Dialog>
    </div>
  );
};
