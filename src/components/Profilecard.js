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
    <Card sx={{ width: "100%" }}>
      <Tabs value={tabValue} onChange={handleChangeTab}>
        <Tab
          sx={{
            fontWeight: 700,

            color: "gray",
          }}
          label="Edit Profile"
        />
        <Tab sx={{ fontWeight: 700 }} label="Security" />
      </Tabs>
      <CardContent>
        {tabValue === 0 && (
          <Box sx={{ width: "100%" }}>
            <Grid container spacing={12}>
              <Grid item xs={12} md={2} lg={2}>
                <img
                  style={{
                    height: "30%",
                    width: "100%",
                    borderRadius: "50%",
                    backgroundColor: "gray",
                    marginTop: "30%",
                    marginLeft: "15%",
                  }}
                  src={siteimage}
                ></img>
              </Grid>
              <Grid item xs={12} md={10} lg={10}>
                <Grid container spacing={12}>
                  <Grid item xs={12} md={6} lg={6} sx={{ mt: 2.5 }}>
                    <label style={{ fontWeight: 500, fontSize: "large" }}>
                      Name :-
                    </label>
                    <input
                      style={{
                        width: "100%",
                        borderRadius: "8px", // Set the border radius
                        height: "40px",
                        border: "2px solid gray",
                        outline: "none",
                        marginTop: "5px",
                      }}
                    />
                    <Box sx={{ mt: 3 }}>
                      <label
                        style={{
                          fontWeight: 500,
                          fontSize: "large",
                        }}
                        for="email"
                      >
                        Email:-
                      </label>
                      <input
                        style={{
                          width: "100%",
                          borderRadius: "8px", // Set the border radius
                          height: "40px",
                          border: "2px solid gray",
                          outline: "none",
                          marginTop: "5px",
                        }}
                      />
                    </Box>
                    <Box sx={{ mt: 3 }}>
                      <label
                        style={{ fontWeight: 500, fontSize: "large" }}
                        for="date of birth"
                      >
                        Date of Birth :-
                      </label>
                      <input
                        style={{
                          width: "100%",
                          borderRadius: "8px", // Set the border radius
                          height: "40px",
                          border: "2px solid gray",
                          outline: "none",
                          marginTop: "5px",
                        }}
                      />
                    </Box>
                    <Box sx={{ mt: 3 }}>
                      <label
                        style={{ fontWeight: 500, fontSize: "large" }}
                        for="Address"
                      >
                        Address :-
                      </label>
                      <input
                        style={{
                          width: "100%",
                          borderRadius: "8px", // Set the border radius
                          height: "40px",
                          border: "2px solid gray",
                          outline: "none",
                          marginTop: "5px",
                        }}
                      />
                    </Box>
                    <Box sx={{ mt: 3 }}>
                      <label
                        style={{ fontWeight: 500, fontSize: "large" }}
                        for="postal code"
                      >
                        Postal Code :-
                      </label>
                      <input
                        style={{
                          width: "100%",
                          borderRadius: "8px", // Set the border radius
                          height: "40px",
                          border: "2px solid gray",
                          outline: "none",
                          marginTop: "5px",
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <Box sx={{ mt: 3 }}>
                      <label style={{ fontWeight: 500, fontSize: "large" }}>
                        Username :-
                      </label>
                      <input
                        style={{
                          width: "100%",
                          borderRadius: "8px", // Set the border radius
                          height: "40px",
                          border: "2px solid gray",
                          outline: "none",
                          marginTop: "5px",
                        }}
                      />
                    </Box>
                    <Box sx={{ mt: 3 }}>
                      <label style={{ fontWeight: 500, fontSize: "large" }}>
                        Password :-
                      </label>
                      <input
                        style={{
                          width: "100%",
                          borderRadius: "8px", // Set the border radius
                          height: "40px",
                          border: "2px solid gray",
                          outline: "none",
                          marginTop: "5px",
                        }}
                      />
                    </Box>
                    <Box sx={{ mt: 3 }}>
                      <label style={{ fontWeight: 500, fontSize: "large" }}>
                        Present Address :-
                      </label>
                      <input
                        style={{
                          width: "100%",
                          borderRadius: "8px", // Set the border radius
                          height: "40px",
                          border: "2px solid gray",
                          outline: "none",
                          marginTop: "5px",
                        }}
                      />
                    </Box>
                    <Box sx={{ mt: 3 }}>
                      <label style={{ fontWeight: 500, fontSize: "large" }}>
                        City :-
                      </label>
                      <input
                        style={{
                          width: "100%",
                          borderRadius: "8px", // Set the border radius
                          height: "40px",
                          border: "2px solid gray",
                          outline: "none",
                          marginTop: "5px",
                        }}
                      />
                    </Box>
                    <Box sx={{ mt: 3 }}>
                      <label style={{ fontWeight: 500, fontSize: "large" }}>
                        Country :-
                      </label>
                      <input
                        style={{
                          width: "100%",
                          borderRadius: "8px", // Set the border radius
                          height: "40px",
                          border: "2px solid gray",
                          outline: "none",
                          marginTop: "5px",
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
          <Box sx={{ mr: 0, width: "40%" }}>
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
      </CardContent>
    </Card>
  );
};
