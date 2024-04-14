import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store";
import useStyles from "./utils";
import Guide from "./Guide";
import Ideas from "./Ideas";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    dispatch(authActions.logout());
    toast.success("Logged out successfully!"); 
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(7,54,80,1) 35%, rgba(0,212,255,1) 100%)",
        top: 0,
      }}
    >
      <Toolbar>
        <Typography className={classes.font} variant="h6">
          Blogs
        </Typography>
        {!isLoggedIn && (
          <Box
            fontSize="9px"
            position="right"
            marginLeft={"auto"}
            marginRight={"4"}
          >   <Ideas />
              <Guide />
            <Button
              display="flex"
              className={classes.font}
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10, fontSize: "9px" }}
              color="primary"
            >
              SignIn
            </Button>
          </Box>
     
           
        
        )}
        {isLoggedIn && (
          <>
            <Box
              fontSize="9px"
              display="flex"
              marginLeft={"auto"}
              marginRight={"auto"}
            >
              {isSmallScreen ? (
                <>
                  <Ideas />
                  <Guide />
                  <Button
                    className={classes.font}
                    onClick={toggleMenu}
                    variant="text"
                    sx={{ margin: 1, borderRadius: 10, fontSize: "9px", color: "white" }}
                  >
                    Menu
                  </Button>
                </>
              ) : (
                <Tabs
                  sx={{ fontSize: "9px" }}
                  textColor="inherit"
                  value={value}
                  onChange={(e, val) => setValue(val)}
                >
                  <Tab
                    sx={{ fontSize: "9px" }}
                    className={classes.font}
                    LinkComponent={Link}
                    to="/blogs"
                    label="Blogs"
                  />
                  <Tab
                    sx={{ fontSize: "9px" }}
                    className={classes.font}
                    LinkComponent={Link}
                    to="/myBlogs"
                    label="My Blogs"
                  />
                  <Tab
                    sx={{ fontSize: "9px" }}
                    className={classes.font}
                    LinkComponent={Link}
                    to="/blogs/add"
                    label="Add Blog"
                  />
                </Tabs>
              )}
            </Box>

            {isSmallScreen && (
              <Drawer anchor="right" open={menuOpen} onClose={toggleMenu}>
                <List>
                  <ListItem component={Link} to="/blogs">
                    <ListItemText primary="Blogs" />
                  </ListItem>
                  <ListItem component={Link} to="/myBlogs">
                    <ListItemText primary="My Blogs" />
                  </ListItem>
                  <ListItem component={Link} to="/blogs/add">
                    <ListItemText primary="Add Blog" />
                  </ListItem>
                  <ListItem onClick={toggleMenu}>
                    <ListItemText primary="Close" />
                  </ListItem>
                </List>
              </Drawer>
            )}

            {!isSmallScreen && (
              <>
                <Ideas /> <Guide />
              </>
            )}
            <Button
              className={classes.font}
              onClick={handleLogout} 
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10, fontSize: "9px" }}
              color="primary"
            >
              LogOut
            </Button>
          </>
        )}
     </Toolbar>
    </AppBar>
  );
 };

