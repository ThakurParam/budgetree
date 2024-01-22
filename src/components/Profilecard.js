import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  TextField,
  Button,
  Box,
  Grid,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import siteimage from "../assets/images/budgetree.png";

export const Profilecard = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <Box sx={{ width: "95%", bgcolor: "white", borderRadius: "20px", p: 5 }}>
      <Tabs value={tabValue} onChange={handleChangeTab}>
        <Tab
          sx={{
            fontWeight: 700,

            color: "gray",
            fontSize: "17px",
          }}
          label="Edit Profile"
        />
        <Tab sx={{ fontWeight: 700, fontSize: "17px" }} label="Security" />
      </Tabs>
      <Box sx={{ width: "100%" }}>
        {tabValue === 0 && (
          <Box sx={{ width: "100%" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={2} sx={{ alignItems: "center" }}>
                <Box sx={{ textAlign: "center", mt: 10 }}>
                  <img
                    style={{
                      height: "120px",
                      width: "120px",
                      borderRadius: "50%",
                      backgroundColor: "gray",

                      padding: "2px",
                    }}
                    src={siteimage}
                  ></img>
                </Box>
              </Grid>
              <Grid item xs={12} md={10} lg={10}>
                <Grid container spacing={8}>
                  <Grid item xs={12} md={6} lg={6} sx={{ mt: 2.5 }}>
                    <label style={{ fontWeight: 400, fontSize: "20px" }}>
                      Your Name
                    </label>
                    <input
                      style={{
                        width: "100%",
                        borderRadius: "15px", // Set the border radius
                        height: "50px",

                        outline: "none",
                        marginTop: "15px",
                        border: "1px solid gray",
                      }}
                    />
                    <Box sx={{ mt: 3 }}>
                      <label
                        style={{
                          fontWeight: 400,
                          fontSize: "20px",
                        }}
                        for="email"
                      >
                        Email
                      </label>
                      <input
                        style={{
                          width: "100%",
                          borderRadius: "15px",
                          height: "50px",

                          outline: "none",
                          marginTop: "15px",
                          border: "1px solid gray",
                        }}
                      />
                    </Box>
                    <Box sx={{ mt: 3 }}>
                      <label
                        style={{ fontWeight: 400, fontSize: "20px" }}
                        for="date of birth"
                      >
                        Date of Birth
                      </label>
                      <input
                        style={{
                          width: "100%",
                          borderRadius: "15px", // Set the border radius
                          height: "50px",

                          outline: "none",
                          marginTop: "15px",
                          border: "1px solid gray",
                        }}
                      />
                    </Box>
                    <Box sx={{ mt: 3 }}>
                      <label
                        style={{ fontWeight: 400, fontSize: "20px" }}
                        for="Address"
                      >
                        Address
                      </label>
                      <input
                        style={{
                          width: "100%",
                          borderRadius: "15px", // Set the border radius
                          height: "50px",

                          outline: "none",
                          marginTop: "15px",
                          border: "1px solid gray",
                        }}
                      />
                    </Box>
                    <Box sx={{ mt: 3 }}>
                      <label
                        style={{ fontWeight: 400, fontSize: "20px" }}
                        for="postal code"
                      >
                        Postal Code
                      </label>
                      <input
                        style={{
                          width: "100%",
                          borderRadius: "15px", // Set the border radius
                          height: "50px",

                          outline: "none",
                          marginTop: "15px",
                          border: "1px solid gray",
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <Box sx={{ mt: 3 }}>
                      <label style={{ fontWeight: 400, fontSize: "20px" }}>
                        User Name
                      </label>
                      <input
                        style={{
                          width: "100%",
                          borderRadius: "15px", // Set the border radius
                          height: "50px",

                          outline: "none",
                          marginTop: "15px",
                          border: "1px solid gray",
                        }}
                      />
                    </Box>
                    <Box sx={{ mt: 3 }}>
                      <label style={{ fontWeight: 400, fontSize: "20px" }}>
                        Password
                      </label>
                      <input
                        style={{
                          width: "100%",
                          borderRadius: "15px", // Set the border radius
                          height: "50px",

                          outline: "none",
                          marginTop: "15px",
                          border: "1px solid gray",
                        }}
                      />
                    </Box>
                    <Box sx={{ mt: 3 }}>
                      <label style={{ fontWeight: 400, fontSize: "20px" }}>
                        Present Address
                      </label>
                      <input
                        style={{
                          width: "100%",
                          borderRadius: "15px", // Set the border radius
                          height: "50px",

                          outline: "none",
                          marginTop: "15px",
                          border: "1px solid gray",
                        }}
                      />
                    </Box>
                    <Box sx={{ mt: 3 }}>
                      <label style={{ fontWeight: 400, fontSize: "20px" }}>
                        City
                      </label>
                      <input
                        style={{
                          width: "100%",
                          borderRadius: "15px", // Set the border radius
                          height: "50px",

                          outline: "none",
                          marginTop: "15px",
                          border: "1px solid gray",
                        }}
                      />
                    </Box>
                    <Box sx={{ mt: 3 }}>
                      <label style={{ fontWeight: 400, fontSize: "20px" }}>
                        Country
                      </label>
                      <input
                        style={{
                          width: "100%",
                          borderRadius: "15px", // Set the border radius
                          height: "50px",

                          outline: "none",
                          marginTop: "15px",
                          border: "1px solid gray",
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Box sx={{ textAlign: "end", mt: 6 }}>
              <Button
                sx={{ width: "20%", height: "50px", mr: 4 }}
                variant="contained"
                color="primary"
              >
                Save
              </Button>
            </Box>
          </Box>
        )}
        {tabValue === 1 && (
          <Box sx={{ mr: 0, width: { xs: "100%", md: "60%", lg: "40%" } }}>
            <p style={{ color: "black", fontWeight: 500, fontSize: "larger" }}>
              Two-factor Authentication
            </p>
            <FormControlLabel
              control={<Switch checked={isChecked} onChange={handleChange} />}
              label={"Enable or Disable two factor Authentication "}
            />
            <p style={{ fontWeight: 600, color: "blue", fontSize: "x-large" }}>
              Change Password
            </p>
            <label style={{ fontWeight: 600 }} for="password">
              Current Password
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
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box sx={{ mt: 3 }}>
              <label style={{ fontWeight: 600 }} for="password">
                {" "}
                New Password
              </label>
              <TextField
                type={showPassword ? "text" : "password"}
                placeholder="type the new passsword"
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
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box sx={{ textAlign: "end", mt: 5 }}>
              <Button sx={{ width: "30%" }} variant="contained" color="primary">
                Save
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
