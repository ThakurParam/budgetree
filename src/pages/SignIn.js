import {
  Alert,
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
import signup from "../assets/images/signin-image.png";
import siteimage from "../assets/images/budgetree.png";
import ClearIcon from "@mui/icons-material/Clear";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, Navigate, useHistory, useNavigate } from "react-router-dom";
import { Password } from "@mui/icons-material";
export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClear = () => {
    setEmail("");
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const [rememberMe, setRememberMe] = useState(false);
  const handleSignIn = () => {
    if (!email || !password) {
      console.log("please fill the details");
      alert("please fill the details");
    } else {
      navigate("/dashboard");
    }
  };
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <Container maxWidth="lg">
          <img src={siteimage}></img>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <Box sx={{ mt: 9, ml: { xs: 0, md: 6 } }}>
                <h1>Sign In</h1>
                <p style={{ opacity: 0.7, marginTop: "-10px" }}>
                  Please fill your detail to access your account.
                </p>
                <Box sx={{ width: { xs: "100%", md: "80%" }, mt: 6 }}>
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
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <label style={{ fontWeight: 600 }} for="password">
                      Password :
                    </label>
                    <TextField
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      fullWidth
                      sx={{ mt: 1 }}
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
                  <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid
                      item
                      xs={6}
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
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
                          Forgot password?
                        </p>
                      </Link>
                    </Grid>
                  </Grid>
                  {/* <Link to="/dashboard"> */}
                  <button
                    style={{
                      width: "100%",
                      height: "60px",
                      color: "white",
                      fontSize: "15px",

                      backgroundColor: "#11409B",
                      borderRadius: "7px",
                      border: "none",
                      marginTop: "5px",
                    }}
                    onClick={handleSignIn}
                  >
                    Sign In
                  </button>
                  {/* </Link> */}

                  <p style={{ textAlign: "center" }}>
                    Don't have an account?
                    <span style={{ color: "#11409B", fontWeight: 500 }}>
                      <Link
                        style={{ color: "blue", textDecoration: "none" }}
                        to="/signup"
                      >
                        Sign up
                      </Link>
                    </span>
                  </p>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <img style={{ width: "100%", height: "100%" }} src={signup}></img>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
