import {
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import forgotimage from "../assets/images/forgot-image.png";
import siteimage from "../assets/images/budgetree.png";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import passwordchangeicon from "../assets/images/passwordchangeicon.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const ResetPassword = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <>
      <Box>
        <Container maxWidth="lg">
          <img src={siteimage}></img>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <Box sx={{ mt: 9, ml: 6 }}>
                <h1>Reset Password</h1>
                <p style={{ opacity: 0.7, marginTop: "-10px" }}>
                  Please type something you’ll remember
                </p>
                <Box sx={{ width: "80%", mt: 6 }}>
                  <Box sx={{ mt: 1 }}>
                    <label style={{ fontWeight: 600 }} for="password">
                      New Password
                    </label>
                    <TextField
                      type={showPassword ? "text" : "password"}
                      placeholder="must be atleast 8 character"
                      fullWidth
                      sx={{
                        mt: 2,
                        // height: "15px",
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleTogglePasswordVisibility}
                              edge="end"
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Box sx={{ mt: 3 }}>
                      <label style={{ fontWeight: 500 }} for="password">
                        {" "}
                        Confirm Password
                      </label>
                      <TextField
                        type={showPassword ? "text" : "password"}
                        placeholder="Re-type the passsword"
                        fullWidth
                        sx={{
                          mt: 2,
                          // height: "15px",
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleTogglePasswordVisibility}
                                edge="end"
                              >
                                {showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                  </Box>
                  <button
                    style={{
                      width: "100%",
                      height: "60px",
                      color: "white",
                      fontSize: "15px",
                      marginTop: "50px",
                      backgroundColor: "#11409B",
                      borderRadius: "7px",
                      border: "none",
                      //   opacity: "0.6",
                    }}
                    onClick={handleClickOpen}
                  >
                    Reset Password
                  </button>
                  <Dialog open={open} onClose={handleClose}>
                    <Box sx={{ m: 5 }}>
                      <Box sx={{ textAlign: "center", mt: 7 }}>
                        <img
                          style={{ height: "20%", width: "20%" }}
                          src={passwordchangeicon}
                        ></img>
                      </Box>
                      <DialogTitle
                        sx={{
                          textAlign: "center",
                          color: "#11409B",
                          fontWeight: 600,
                          mt: 4,
                        }}
                      >
                        Password changed
                      </DialogTitle>

                      <DialogContent
                        sx={{ width: "80%", textAlign: "center", mt: -2 }}
                      >
                        <p>Your password has been changed succesfully</p>
                      </DialogContent>

                      <DialogActions sx={{ mt: 5 }}>
                        <button
                          style={{
                            width: "100%",
                            height: "50px",
                            backgroundColor: "#11409B",
                            color: "white",
                            borderRadius: "8px",
                            fontSize: "15px",
                            fontWeight: 600,
                            border: "none",
                          }}
                          onClick={handleClose}
                        >
                          Back to Login{" "}
                        </button>
                      </DialogActions>
                    </Box>
                  </Dialog>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <img
                style={{ width: "100%", height: "100%", borderRadius: "5px" }}
                src={forgotimage}
              ></img>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
