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

export const Enterotp = () => {
  const [email, setEmail] = useState("");

  const handleClear = () => {
    setEmail("");
  };
  const [otp, setOtp] = useState(["", "", "", "", ""]);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
  };
  return (
    <>
      <Box>
        <Container maxWidth="lg">
          <img src={siteimage}></img>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <Box sx={{ mt: 9, ml: 6 }}>
                <h1>Enter OTP</h1>
                <p style={{ opacity: 0.7, marginTop: "-10px" }}>
                  We’ve sent a code to <span>helloworld@gmail.com</span>
                </p>
                <Box sx={{ width: "80%", mt: 6 }}>
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
                            {email && (
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
                            )}
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Box sx={{ mt: 2 }}>
                      <label style={{ fontWeight: 600 }} for="OTP">
                        Enter OTP
                      </label>
                      <Box sx={{ mt: 1 }}>
                        <Grid container spacing={2}>
                          {otp.map((digit, index) => (
                            <Grid item xs={2} key={index}>
                              <TextField
                                variant="outlined"
                                fullWidth
                                type="number"
                                value={digit}
                                inputProps={{ maxLength: 1 }}
                                onChange={(e) =>
                                  handleOtpChange(index, e.target.value)
                                }
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </Box>
                  </Box>
                  <button
                    style={{
                      width: "100%",
                      height: "60px",
                      color: "white",
                      fontSize: "15px",

                      backgroundColor: "#11409B",
                      borderRadius: "7px",
                      border: "none",
                      marginTop: "35px",
                    }}
                  >
                    Submit
                  </button>

                  <p style={{ textAlign: "center" }}>
                    Remember Password?
                    <span style={{ color: "#11409B", fontWeight: 500 }}>
                      Sign in
                    </span>
                  </p>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={forgotimage}
              ></img>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
