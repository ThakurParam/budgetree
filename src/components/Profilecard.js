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
        <Tab label="Edit Profile" />
        <Tab label="Security" />
      </Tabs>
      <CardContent>
        {tabValue === 0 && (
          <Box sx={{ width: "100%" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={2} lg={2}>
                <img
                  style={{
                    height: "30%",
                    width: "100%",
                    borderRadius: "50%",
                    backgroundColor: "gray",
                  }}
                  src={siteimage}
                ></img>
              </Grid>
              <Grid item xs={12} md={10} lg={10}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} lg={6}>
                    <label style={{ fontWeight: 500 }}>Name</label>
                    <TextField fullWidth margin="normal" />
                    <label style={{ fontWeight: 500 }} for="email">
                      Email
                    </label>
                    <TextField fullWidth margin="normal" />
                    <label style={{ fontWeight: 500 }} for="date of birth">
                      Date of Birth
                    </label>
                    <TextField fullWidth margin="normal" />
                    <label style={{ fontWeight: 500 }} for="Address">
                      Address
                    </label>
                    <TextField fullWidth margin="normal" />
                    <label style={{ fontWeight: 500 }} for="postal code">
                      Postal Code
                    </label>
                    <TextField fullWidth margin="normal" />
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <label style={{ fontWeight: 500 }}>Username</label>
                    <TextField fullWidth margin="normal" />
                    <label style={{ fontWeight: 500 }}>Password</label>
                    <TextField fullWidth margin="normal" />
                    <label style={{ fontWeight: 500 }}>Present Address</label>
                    <TextField fullWidth margin="normal" />
                    <label style={{ fontWeight: 500 }}>City</label>
                    <TextField fullWidth margin="normal" />
                    <label style={{ fontWeight: 500 }}>Country</label>
                    <TextField fullWidth margin="normal" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Box sx={{ textAlign: "end" }}>
              <Button variant="contained" color="primary">
                Save
              </Button>
            </Box>
          </Box>
        )}
        {tabValue === 1 && (
          <Box sx={{ mr: 0 }}>
            <p style={{ color: "black", fontWeight: 500 }}>
              Two-factor Authentication
            </p>
            <FormControlLabel
              control={<Switch checked={isChecked} onChange={handleChange} />}
              // label={isChecked ? "ON" : "OFF"}
              label={"Enable or Disable two factor Authentication "}
            />
            <p style={{ fontWeight: 600, color: "blue" }}>Change Password</p>
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
              <label style={{ fontWeight: 500 }} for="password">
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
              <Button variant="contained" color="primary">
                Save
              </Button>
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};
