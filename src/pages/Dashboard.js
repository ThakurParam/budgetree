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
import { NotificationsPanel } from "../components/NotificationsPanel";
import HomeIcon from "@mui/icons-material/Home";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Searchbar } from "../components/Searchbar";
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
  // notifications const //////////////////////////////////////////////////
  const [anchorEl, setAnchorEl] = useState(null);

  const handleNotificationsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationsClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleProfileClick = () => {
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
        zIndex: 99,
        width: 320,
        display: { md: "block", xs: "none" },
        // flexShrink: 0,
        fontSize: "20px",

        "& .MuiDrawer-paper": {
          pt: 2,
          // p: 1,
          width: 320,
          boxSizing: "border-box",
        },
      }}
    >
      <div>
        <img
          style={{
            width: "auto",
            height: "auto",
            // display: "none",
            margin: "25px",
          }}
          src={siteimage}
        ></img>
      </div>
      <List sx={{ mt: 2 }}>
        <ListItem
          button
          key="dashboard"
          onClick={() => handleTabClick("dashboard")}
          sx={{
            borderLeft:
              selectedTab === "dashboard"
                ? "8px solid blue"
                : "6px solid transparent",
          }}
        >
          <ListItemIcon>
            <HomeIcon
              sx={{
                color: selectedTab === "dashboard" ? "blue" : "",
                fontSize: "40px",
              }}
            />
          </ListItemIcon>
          <ListItemText>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                color: selectedTab === "dashboard" ? "blue" : "gray",
                fontSize: "21px",
              }}
            >
              Dashboard
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem
          button
          key="user"
          onClick={() => handleTabClick("user")}
          sx={{
            mt: 1,
            borderLeft:
              selectedTab === "user"
                ? "8px solid blue"
                : "6px solid transparent",
          }}
        >
          <ListItemIcon>
            <PersonIcon
              sx={{
                color: selectedTab === "user" ? "blue" : "",
                fontSize: "40px",
              }}
            />
          </ListItemIcon>
          <ListItemText>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                color: selectedTab === "user" ? "blue" : "gray",
                fontSize: "21px",
              }}
            >
              User
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem
          button
          key="transactions"
          onClick={() => handleTabClick("transactions")}
          sx={{
            mt: 1,
            borderLeft:
              selectedTab === "transactions"
                ? "8px solid blue"
                : "6px solid transparent",
          }}
        >
          <ListItemIcon>
            <ListAltIcon
              sx={{
                color: selectedTab === "transactions" ? "blue" : "",
                fontSize: "40px",
              }}
            />
          </ListItemIcon>
          <ListItemText>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                color: selectedTab === "transactions" ? "blue" : "gray",
                fontSize: "21px",
              }}
            >
              Transactions
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
  const Sidebar = (
    <Drawer
      variant="permanent"
      sx={{
        // zIndex: 9,
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
            borderLeft:
              selectedTab === "dashboard"
                ? "8px solid blue"
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
    <AppBar position="fixed" sx={{ zIndex: 9, height: 110 }}>
      <Toolbar sx={{ bgcolor: "white", height: 110 }}>
        <mobileDrawer />
        <IconButton
          color="inherit"
          onClick={handleMobileDrawerOpen}
          sx={{
            mr: 2,
            display: {
              md: "none",
              xs: "block",
              textAlign: "center",
              color: "black ",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
        <div style={{ flexGrow: 1, textAlign: "end", marginRight: "1%" }}></div>
        <div style={{ textAlign: "end" }}>
          <Searchbar />
        </div>
        <NotificationsPanel />
        <div>
          <Avatar
            alt="User Avatar"
            src="/path/to/avatar.jpg"
            sx={{ cursor: "pointer", height: "70px", width: "70px" }}
            size={64}
            onClick={() => handleTabClick("avatar")}
          />
        </div>
      </Toolbar>
    </AppBar>
  );

  const mobileDrawer = (
    <MuiDrawer
      style={{ color: "black" }}
      anchor="right"
      open={isMobileDrawerOpen}
      onClose={handleMobileDrawerClose}
    >
      {Sidebar}
    </MuiDrawer>
  );

  const renderContent = () => {
    switch (selectedTab) {
      case "dashboard":
        return (
          <>
            <Box
              sx={{ width: "100%", mt: 14, bgcolor: "#f5f7fa", p: 4, pt: 7 }}
            >
              <Grid container spacing={2}>
                {[...Array(4)].map(() => (
                  <Grid item xs={12} md={3} lg={3}>
                    <Box
                      sx={{
                        width: { xs: "90%", md: "70%", lg: "70%" },
                        borderRadius: "40px",
                        bgcolor: "white",
                        p: 1,
                        pl: 4,
                        pr: 5,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          textAlign: "center",
                        }}
                      >
                        <div>
                          <Avatar
                            sx={{
                              height: 85,
                              width: 85,
                              mx: "auto",
                              mt: 2,
                              textAlign: "center",
                            }}
                          />
                        </div>
                        <div>
                          <p
                            style={{
                              marginTop: "15px",
                              fontWeight: 500,
                              opacity: 0.6,
                              fontSize: "23px",
                            }}
                          >
                            Vouchers
                          </p>
                          <p
                            style={{
                              fontWeight: 600,
                              fontSize: "35px",
                              marginTop: "-15px",
                            }}
                          >
                            12,750
                          </p>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Box sx={{ mt: 5 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={8} lg={8}>
                    <h2
                      style={{ fontSize: "30px", color: "#343c6a", opacity: 1 }}
                    >
                      Weekly Activity
                    </h2>
                    <Box
                      sx={{
                        width: { xs: "100%", md: "90%", lg: "90%" },
                        bgcolor: "white",
                        p: 4,
                        borderRadius: "40px",
                      }}
                    >
                      <Chart />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} lg={4}>
                    <h2
                      style={{ fontSize: "30px", color: "#343c6a", opacity: 1 }}
                    >
                      Recent Transactions
                    </h2>
                    <Box
                      sx={{
                        width: "90%",
                        bgcolor: "white",
                        p: 3,
                        borderRadius: "40px",
                      }}
                    >
                      <Grid container spacing={2}>
                        {[...Array(4)].map(() => (
                          <Grid item xs={12} md={12} lg={12}>
                            <Box sx={{ height: "auto" }}>
                              <Grid container spacing={2}>
                                <Grid item xs={3}>
                                  <Avatar
                                    sx={{
                                      mx: "auto",
                                      height: "65px",
                                      width: "65px",
                                      m: 1.5,
                                    }}
                                  />
                                </Grid>
                                <Grid item xs={6}>
                                  <p
                                    style={{
                                      fontWeight: 700,
                                      fontSize: "20px",
                                    }}
                                  >
                                    Deposit from my Card
                                  </p>
                                  <p
                                    style={{
                                      marginTop: "-15px",
                                      opacity: 0.5,
                                      marginLeft: "15px",
                                      fontSize: "17px",
                                      fontWeight: "700",
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
                                      padding: "auto",
                                      textAlign: "center",
                                    }}
                                  >
                                    +2255
                                  </p>
                                </Grid>
                              </Grid>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ mt: 4 }}>
                <h2 style={{ fontSize: "30px", color: "#343c6a", opacity: 1 }}>
                  Recent Users
                </h2>
                <Grid container spacing={2} sx={{ mt: -2 }}>
                  {[...Array(12)].map(() => (
                    <Grid
                      item
                      xs={6}
                      md={3}
                      lg={2.4}
                      sx={{ textAlign: "center" }}
                    >
                      <Box
                        sx={{
                          textAlign: "center",
                          p: 3,
                          width: "80%",
                          m: { xs: 0, md: 2, lg: 2 },
                          bgcolor: "white",
                          borderRadius: "30px",
                        }}
                      >
                        <Avatar
                          sx={{ mx: "auto", height: "80px", width: "80px" }}
                        />
                        <p style={{ fontWeight: 700, fontSize: "25px" }}>
                          Param Thakur
                        </p>
                        <p
                          style={{
                            marginTop: "-15px",
                            opacity: 0.7,
                            fontWeight: 500,
                          }}
                        >
                          Lorem ipsum
                        </p>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                            marginTop: "40px",
                          }}
                        >
                          <div
                          //  style={{ marginRight: "0px" }}
                          >
                            <MailOutlineIcon
                              sx={{ color: "#11409b", fontSize: "30px" }}
                            />
                          </div>
                          <div
                          //  style={{ marginLeft: "25px" }}
                          >
                            <CallIcon
                              sx={{ color: "#11409b", fontSize: "30px" }}
                            />
                          </div>
                          <div
                          //  style={{ marginLeft: "25px" }}
                          >
                            <QuestionAnswerIcon
                              sx={{ color: "#11409b", fontSize: "30px" }}
                            />
                          </div>
                        </div>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </>
        );
      case "user":
        return (
          <Box sx={{ width: "100%", mt: 14, bgcolor: "#f5f7fa", p: 4, pt: 7 }}>
            <Grid container spacing={2}>
              {[...Array(4)].map(() => (
                <Grid item xs={12} md={3} lg={3}>
                  <Box
                    sx={{
                      width: { xs: "90%", md: "70%", lg: "70%" },
                      borderRadius: "40px",
                      bgcolor: "white",
                      p: 1,
                      pl: 4,
                      pr: 5,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        textAlign: "center",
                      }}
                    >
                      <div>
                        <Avatar
                          sx={{
                            height: 85,
                            width: 85,
                            mx: "auto",
                            mt: 2,
                            textAlign: "center",
                          }}
                        />
                      </div>
                      <div>
                        <p
                          style={{
                            marginTop: "15px",
                            fontWeight: 500,
                            opacity: 0.6,
                            fontSize: "23px",
                          }}
                        >
                          Vouchers
                        </p>
                        <p
                          style={{
                            fontWeight: 600,
                            fontSize: "35px",
                            marginTop: "-15px",
                          }}
                        >
                          12,750
                        </p>
                      </div>
                    </div>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <h1 style={{ color: "blueviolet" }}>Onboard Users</h1>
            <Grid container spacing={1} sx={{ mt: 3 }}>
              {[...Array(20)].map(() => (
                <Grid item xs={6} md={3} lg={2.4} sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      textAlign: "center",
                      p: 3,
                      width: "80%",
                      m: { xs: 0, md: 2, lg: 2 },
                      bgcolor: "white",
                      borderRadius: "30px",
                    }}
                  >
                    <Avatar
                      sx={{ mx: "auto", height: "80px", width: "80px" }}
                    />
                    <p style={{ fontWeight: 700, fontSize: "25px" }}>
                      Param Thakur
                    </p>
                    <p
                      style={{
                        marginTop: "-15px",
                        opacity: 0.7,
                        fontWeight: 500,
                      }}
                    >
                      Lorem ipsum
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        marginTop: "40px",
                      }}
                    >
                      <div
                      //  style={{ marginRight: "0px" }}
                      >
                        <MailOutlineIcon
                          sx={{ color: "#11409b", fontSize: "30px" }}
                        />
                      </div>
                      <div
                      //  style={{ marginLeft: "25px" }}
                      >
                        <CallIcon sx={{ color: "#11409b", fontSize: "30px" }} />
                      </div>
                      <div
                      //  style={{ marginLeft: "25px" }}
                      >
                        <QuestionAnswerIcon
                          sx={{ color: "#11409b", fontSize: "30px" }}
                        />
                      </div>
                    </div>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        );
      case "transactions":
        return (
          <>
            <Box
              sx={{ width: "100%", mt: 14, bgcolor: "#f5f7fa", p: 4, pt: 7 }}
            >
              <Grid container spacing={2}>
                {[...Array(4)].map(() => (
                  <Grid item xs={12} md={3} lg={3}>
                    <Box
                      sx={{
                        width: { xs: "90%", md: "70%", lg: "70%" },
                        borderRadius: "40px",
                        bgcolor: "white",
                        p: 1,
                        pl: 4,
                        pr: 5,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          textAlign: "center",
                        }}
                      >
                        <div>
                          <Avatar
                            sx={{
                              height: 85,
                              width: 85,
                              mx: "auto",
                              mt: 2,
                              textAlign: "center",
                            }}
                          />
                        </div>
                        <div>
                          <p
                            style={{
                              marginTop: "15px",
                              fontWeight: 500,
                              opacity: 0.6,
                              fontSize: "23px",
                            }}
                          >
                            Vouchers
                          </p>
                          <p
                            style={{
                              fontWeight: 600,
                              fontSize: "35px",
                              marginTop: "-15px",
                            }}
                          >
                            12,750
                          </p>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Box>
                <h1>Transaction here</h1>

                <Tabel transactions={transactions} />
              </Box>
            </Box>
          </>
        );
      case "avatar":
        return (
          <>
            <Box sx={{ width: "100%", mt: 14, bgcolor: "#f5f7fa", p: 6 }}>
              <Profilecard />
            </Box>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <div style={{ display: "flex" }}>
      {leftSidebar}

      {topBar}
      {/* <Toolbar /> */}
      {renderContent()}

      {mobileDrawer}
    </div>
  );
};
