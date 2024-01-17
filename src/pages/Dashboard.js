import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Container,
  CssBaseline,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Drawer as MuiDrawer,
  Box,
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Profilecard } from "../components/Profilecard";
// import { Tabel2 } from "../components/Tabel2";
import { transactions } from "../Arrays/transactions";
import { Tabel } from "../components/Tabel";
// import { Card } from "../components/Card";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import { Chart } from "../components/Chart";
import siteimage from "../assets/images/budgetree.png";
export const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("");
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const [isMobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleMobileDrawerOpen = () => {
    setMobileDrawerOpen(true);
  };

  const handleMobileDrawerClose = () => {
    setMobileDrawerOpen(false);
  };

  const handleNotificationsClick = () => {
    setNotificationsOpen(!isNotificationsOpen);
  };

  const handleProfileClick = () => {
    // Handle opening the profile page
    console.log("Opening Profile Page");
  };
  const [openProfile, setOpenProfile] = useState(false);

  const handleOpenProfile = () => {
    setOpenProfile(true);
  };

  const handleCloseProfile = () => {
    setOpenProfile(false);
  };

  const leftSidebar = (
    <Drawer
      variant="permanent"
      sx={{
        zIndex: 9,
        width: 240,
        display: { md: "block", xs: "none" },
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <List>
        <ListItem
          button
          key="dashboard"
          onClick={() => handleTabClick("dashboard")}
          sx={{
            borderBottom:
              selectedTab === "dashboard"
                ? "2px solid blue"
                : "2px solid transparent",
          }}
        >
          <ListItemIcon>
            <DashboardIcon
              sx={{ color: selectedTab === "dashboard" ? "blue" : "" }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Dashboard"
            sx={{ color: selectedTab === "dashboard" ? "blue" : "" }}
          />
        </ListItem>
        <ListItem
          button
          key="user"
          onClick={() => handleTabClick("user")}
          sx={{
            borderBottom:
              selectedTab === "user"
                ? "2px solid blue"
                : "2px solid transparent",
          }}
        >
          <ListItemIcon>
            <PersonIcon sx={{ color: selectedTab === "user" ? "blue" : "" }} />
          </ListItemIcon>
          <ListItemText
            primary="User"
            sx={{ color: selectedTab === "user" ? "blue" : "" }}
          />
        </ListItem>
        <ListItem
          button
          key="transactions"
          onClick={() => handleTabClick("transactions")}
          sx={{
            borderBottom:
              selectedTab === "transactions"
                ? "2px solid blue"
                : "2px solid transparent",
          }}
        >
          <ListItemIcon>
            <ListAltIcon
              sx={{ color: selectedTab === "transactions" ? "blue" : "" }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Transactions"
            sx={{ color: selectedTab === "transactions" ? "blue" : "" }}
          />
        </ListItem>
      </List>
    </Drawer>
  );

  const topBar = (
    <AppBar position="fixed" sx={{ zIndex: 99 }}>
      <Toolbar sx={{ bgcolor: "white" }}>
        <img src={siteimage}></img>
        <IconButton
          color="inherit"
          onClick={handleMobileDrawerOpen}
          sx={{ mr: 2, display: { md: "none", xs: "block" } }}
        >
          <MenuIcon />
        </IconButton>
        <div style={{ flexGrow: 1, textAlign: "end" }}>
          <IconButton
            color="black"
            onClick={handleNotificationsClick}
            sx={{ outline: isNotificationsOpen ? "2px solid red" : "none" }}
          >
            <NotificationsIcon />
          </IconButton>
        </div>
        <div>
          <Avatar
            alt="User Avatar"
            src="/path/to/avatar.jpg"
            sx={{ cursor: "pointer" }}
            onClick={handleOpenProfile}
          />
          <Dialog
            open={openProfile}
            onClose={handleCloseProfile}
            sx={{ width: "100%" }}
          >
            <DialogTitle>Profile</DialogTitle>
            <DialogContent>
              <Profilecard />
            </DialogContent>
          </Dialog>
        </div>
      </Toolbar>
    </AppBar>
  );

  const mobileDrawer = (
    <MuiDrawer
      anchor="left"
      open={isMobileDrawerOpen}
      onClose={handleMobileDrawerClose}
    >
      {leftSidebar}
    </MuiDrawer>
  );

  const renderContent = () => {
    switch (selectedTab) {
      case "dashboard":
        return (
          <>
            <Box sx={{ width: "100%", mt: 15 }}>
              <Grid container spacing={2}>
                {[...Array(4)].map(() => (
                  <Grid item xs={3}>
                    <Card sx={{ width: "70%", borderRadius: "15px" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          textAlign: "center",
                        }}
                      >
                        <div>
                          <Avatar sx={{ height: 60, width: 60, mt: 2 }} />
                        </div>
                        <div>
                          <p
                            style={{
                              marginTop: "15px",
                              fontWeight: 600,
                              opacity: 0.6,
                            }}
                          >
                            Vouchers
                          </p>
                          <p
                            style={{
                              fontWeight: 600,
                              fontSize: "23px",
                              marginTop: "-15px",
                            }}
                          >
                            12,750
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={8} lg={8}>
                    <h2>Weekly Activity</h2>
                    <Box sx={{ width: "90%" }}>
                      <Chart />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} lg={4}>
                    <h2>Recent Transactions</h2>
                    <Box sx={{ width: "90%" }}>
                      <Grid container spacing={2}>
                        {[...Array(4)].map(() => (
                          <Grid item xs={12} md={12} lg={12}>
                            <Card sx={{ height: "70px" }}>
                              <Grid container spacing={2}>
                                <Grid item xs={3}>
                                  <Avatar
                                    sx={{
                                      mx: "30%",
                                      height: "50%",
                                      width: "50%",
                                      m: 1.5,
                                    }}
                                  />
                                </Grid>
                                <Grid item xs={5}>
                                  <p style={{ fontWeight: 600 }}>
                                    Deposit from my Card{" "}
                                  </p>
                                  <p
                                    style={{
                                      marginTop: "-15px",
                                      opacity: 0.7,
                                      marginLeft: "15px",
                                    }}
                                  >
                                    28 january 2021
                                  </p>
                                </Grid>
                                <Grid item xs={3}>
                                  <p
                                    style={{
                                      fontWeight: 800,
                                      fontSize: "20px",
                                    }}
                                  >
                                    +225
                                  </p>
                                </Grid>
                              </Grid>
                            </Card>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <h2>Recent Users</h2>
                <Grid container spacing={2} sx={{ mt: 3 }}>
                  {[...Array(12)].map(() => (
                    <Grid
                      item
                      xs={6}
                      md={3}
                      lg={3}
                      sx={{ textAlign: "center" }}
                    >
                      <Card sx={{ textAlign: "center", p: 2 }}>
                        <Avatar
                          sx={{ mx: "42%", height: "55px", width: "55px" }}
                        />
                        <p style={{ fontWeight: 600, fontSize: "20px" }}>
                          Name
                        </p>
                        <p style={{ marginTop: "-12px", opacity: 0.7 }}>
                          Lorem ipsum
                        </p>
                        <div
                          style={{
                            display: "inline-flex",
                          }}
                        >
                          <div style={{ marginRight: "10px" }}>
                            <MailOutlineIcon
                              sx={{ color: "blue", fontSize: "30px" }}
                            />
                          </div>
                          <div style={{ marginLeft: "10px" }}>
                            <CallIcon
                              sx={{ color: "blue", fontSize: "30px" }}
                            />
                          </div>
                        </div>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </>
        );
      case "user":
        return (
          <Box sx={{ width: "100%", mt: 15 }}>
            <Grid container spacing={2}>
              {[...Array(4)].map(() => (
                <Grid item xs={12} md={6} lg={3}>
                  <Card sx={{ width: "70%", borderRadius: "15px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        textAlign: "center",
                      }}
                    >
                      <div>
                        <Avatar sx={{ height: 60, width: 60, mt: 2 }} />
                      </div>
                      <div>
                        <p
                          style={{
                            marginTop: "15px",
                            fontWeight: 600,
                            opacity: 0.6,
                          }}
                        >
                          Vouchers
                        </p>
                        <p
                          style={{
                            fontWeight: 600,
                            fontSize: "23px",
                            marginTop: "-15px",
                          }}
                        >
                          12,750
                        </p>
                      </div>
                    </div>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <h1 style={{ color: "blueviolet" }}>Onboard Users</h1>
            <Grid container spacing={2} sx={{ mt: 3 }}>
              {[...Array(20)].map(() => (
                <Grid item xs={6} md={3} lg={3} sx={{ textAlign: "center" }}>
                  <Card sx={{ textAlign: "center", p: 2 }}>
                    <Avatar sx={{ mx: "42%", height: "55px", width: "55px" }} />
                    <p style={{ fontWeight: 600, fontSize: "20px" }}>Name</p>
                    <p style={{ marginTop: "-12px", opacity: 0.7 }}>
                      Lorem ipsum
                    </p>
                    <div
                      style={{
                        display: "inline-flex",
                      }}
                    >
                      <div style={{ marginRight: "10px" }}>
                        <MailOutlineIcon
                          sx={{ color: "blue", fontSize: "30px" }}
                        />
                      </div>
                      <div style={{ marginLeft: "10px" }}>
                        <CallIcon sx={{ color: "blue", fontSize: "30px" }} />
                      </div>
                    </div>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        );
      case "transactions":
        return (
          <>
            <Box sx={{ mt: 15, width: "100%" }}>
              <h1>Transaction here</h1>

              <div>
                <Tabel transactions={transactions} />
              </div>
            </Box>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      {leftSidebar}
      {/* <Container component="main" sx={{ flexGrow: 1, p: 3 }}> */}
      {topBar}
      <Toolbar />
      {renderContent()}
      {/* </Container> */}
      {mobileDrawer}
    </div>
  );
};
