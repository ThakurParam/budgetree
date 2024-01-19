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
import { Link } from "react-router-dom";

export const ResetPassword = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen("/");
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <>
      <Box>
        <Box>
          <Grid container spacing={2} sx={{ p: { xs: 1, md: 7 } }}>
            <Grid item xs={12} md={6} lg={6}>
              <img src={siteimage}></img>
              <Box
                sx={{
                  ml: { xs: 0, md: 9 },
                  pl: { xs: 0 },
                  md: 5,
                  mt: 15,
                }}
              >
                <h1 style={{ fontSize: "60px" }}>Reset Password</h1>
                <p
                  style={{
                    opacity: 0.7,
                    marginTop: "-25px",
                    fontSize: "x-large",
                  }}
                >
                  Please type something you’ll remember
                </p>
                <Box sx={{ width: { xs: "100%", md: "70%" }, mt: 10 }}>
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
                    <Box sx={{ mt: 5 }}>
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
                      height: "70px",
                      color: "white",
                      fontSize: "15px",

                      backgroundColor: "#11409B",
                      borderRadius: "7px",
                      border: "none",
                      marginTop: "50px",
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
                        <Link style={{ color: "white", width: "100%" }} to="/">
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
                            Back to Login
                          </button>
                        </Link>
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
        </Box>
      </Box>
    </>
  );
};
