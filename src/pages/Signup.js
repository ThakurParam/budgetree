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
import { Link, Navigate, useNavigate } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.includes("@") || !value.includes(".")) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const [rememberMe, setRememberMe] = useState(false);
  const handleSignIn = () => {
    if (!emailError && !passwordError) {
      console.log("Form Submitted Successfully");
      navigate("/dashboard");
    } else {
      alert("please fill the details");
    }
  };
  const navigate = useNavigate();
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
                <h1 style={{ fontSize: "60px" }}>Sign Up</h1>
                <p
                  style={{
                    opacity: 0.7,
                    marginTop: "-25px",
                    fontSize: "x-large",
                  }}
                >
                  Please fill your detail to create your account.{" "}
                </p>
                <Box sx={{ width: { xs: "100%", md: "100%" }, mt: 9 }}>
                  <Box sx={{ mt: 1 }}>
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
                      onChange={handleEmailChange}
                      error={!!emailError}
                      helperText={emailError}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end"></InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                  <Box sx={{ mt: 5 }}>
                    <label style={{ fontWeight: 600 }} for="password">
                      Password :
                    </label>
                    <TextField
                      value={password}
                      onChange={handlePasswordChange}
                      error={!!passwordError}
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
                        height: "70px",
                        color: "white",
                        fontSize: "15px",

                        backgroundColor: "#11409B",
                        borderRadius: "7px",
                        border: "none",
                        marginTop: "20px",
                      }}
                      onClick={handleSignIn}
                    >
                      Sign Up
                    </button>

                    <p style={{ textAlign: "center" }}>
                      Don't have an account ?
                      <span style={{ color: "#11409B", fontWeight: 500 }}>
                        <Link
                          style={{
                            color: "blue",
                            textDecoration: "none",
                            marginLeft: "5px",
                          }}
                          to="/"
                        >
                          Sign In
                        </Link>
                      </span>
                    </p>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4.6} lg={4.6} sx={{ ml: { xs: 0, md: 25 } }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={signup2}
              ></img>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
