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
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
import { MuiOtpInput } from "mui-one-time-password-input";

export const Forgotpassword = () => {
  const [email, setEmail] = useState("");

  const handleClear = () => {
    setEmail("");
  };
  const [otp, setOtp] = React.useState("");

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  return (
    <>
      <Box>
        <Box>
          <img
            style={{
              marginTop: "10px",
              marginLeft: "80px",
              width: "auto ",
              height: "auto ",
            }}
            src={siteimage}
          ></img>
          <Grid container spacing={2} sx={{ p: { xs: 1, md: 0 } }}>
            <Grid item xs={12} md={4.6} lg={4.6}>
              <Box
                sx={{
                  ml: { xs: 0, md: 22 },
                  pl: { xs: 0 },
                  md: 5,
                  mt: 9,
                }}
              >
                <Box sx={{ width: { xs: "100%", md: "90%" } }}>
                  <h1 style={{ fontSize: "60px" }}>Forgot Password</h1>
                  <p
                    style={{
                      opacity: 0.7,
                      marginTop: "-25px",
                      fontSize: {
                        md: "x-large",
                        //  xs: "large", lg: "x-large"
                      },
                    }}
                  >
                    Don’t worry ! It happens. Please enter the phone number we
                    will send the OTP in this phone number.
                  </p>
                </Box>

                <Box sx={{ width: { xs: "100%", md: "100%" }, mt: 9 }}>
                  <Box sx={{ mt: 1 }}>
                    <label style={{ fontWeight: 600 }} for="email">
                      Enter email
                    </label>
                    <TextField
                      // label="Email"
                      placeholder="Email"
                      variant="outlined"
                      fullWidth
                      sx={{
                        mt: 2,
                        // height: "15px",
                      }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {/* {email && (
                              <IconButton
                                edge="end"
                                onClick={handleClear}
                                sx={{
                                  border: "1px solid black",
                                  opacity: 0.5,
                                  mr: 1,
                                }}
                              >
                                <ClearIcon sx={{ width: 10, height: 10 }} />
                              </IconButton>
                            )} */}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                  <Box sx={{ mt: 5 }}>
                    <label style={{ fontWeight: 600 }} for="OTP">
                      Enter OTP
                    </label>
                    <Box sx={{ mt: 4 }}>
                      <MuiOtpInput value={otp} onChange={handleChange} />
                    </Box>
                  </Box>
                  <Link to="/resetpassword">
                    <button
                      style={{
                        width: "100%",
                        height: "70px",
                        color: "white",
                        fontSize: "15px",

                        backgroundColor: "#11409B",
                        border: "none",
                        borderRadius: "8px",
                        marginTop: "55px",
                      }}
                    >
                      Continue
                    </button>
                  </Link>

                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "20px",
                      fontWeight: 500,
                    }}
                  >
                    Remember Password?
                    <span style={{ color: "#11409B", fontWeight: 500 }}>
                      <Link
                        style={{
                          textDecoration: "none",
                          marginLeft: "5px",
                          color: "blue",
                        }}
                        to="/"
                      >
                        Sign in
                      </Link>
                    </span>
                  </p>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4.6} lg={4.6} sx={{ ml: { xs: 0, md: 25 } }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={forgotimage}
              ></img>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
