import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import siteimage from "../assets/images/budgetree.png";
import signup2 from "../assets/images/signup.png";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState("");

  const handleClear = () => {
    setEmail("");
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <>
      <Box>
        <Container maxWidth="lg">
          <img src={siteimage}></img>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <Box sx={{ mt: 9, ml: { xs: 0, md: 6 } }}>
                <h1>Sign Up</h1>
                <p style={{ opacity: 0.7, marginTop: "-10px" }}>
                  Please fill your detail to create your account.{" "}
                </p>
                <Box sx={{ width: { xs: "100%", md: "80%" }, mt: 6 }}>
                  <label style={{ fontWeight: 600 }} for="email">
                    Email
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
                  <Box sx={{ mt: 4 }}>
                    <label style={{ fontWeight: 500 }} for="password">
                      Password
                    </label>
                    <TextField
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
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
                  <Box sx={{ mt: 2 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={rememberMe}
                              onChange={() => setRememberMe(!rememberMe)}
                            />
                          }
                          label="Remember Me"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/forgot password"
                        >
                          <p
                            style={{
                              color: "blue",
                              textDecoration: "none",
                              textAlign: "end",
                              marginTop: "12px",
                              // textUnderline: "none",
                            }}
                          >
                            Forgot Password?
                          </p>
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box sx={{ mt: 4 }}>
                    <button
                      style={{
                        width: "100%",
                        height: "60px",
                        color: "white",
                        fontSize: "15px",

                        backgroundColor: "#11409B",
                        borderRadius: "7px",
                        border: "none",
                      }}
                    >
                      Sign Up
                    </button>

                    <p style={{ textAlign: "center" }}>
                      Don't have an account
                      <span style={{ color: "#11409B", fontWeight: 500 }}>
                        <Link to="/">Sign In</Link>
                      </span>
                    </p>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={signup2}
              ></img>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
