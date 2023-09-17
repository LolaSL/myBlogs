import React, { useState } from "react";
import useStyles from "./utils";
import { Menu, MenuItem, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Ideas = () => {
  const classes = useStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setAnchorEl(null);
  };

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <Button
        className={classes.font}
        onClick={openMenu}
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: "9px",
          margin: 1,
          borderRadius: 6,
          display: "flex",
          justifyContent: "flex",
        }}
      >
        Ideas
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          className={classes.font}
          onClick={toggleMenu}
          component={Link}
          to="/journey"
        >
          Find your next trip and destination
        </MenuItem>
        <MenuItem
          className={classes.font}
          onClick={toggleMenu}
          component={Link}
          to="/tips"
        >
          The best tourist tips
        </MenuItem>
        <MenuItem
          className={classes.font}
          onClick={toggleMenu}
          component={Link}
          to="/hotel-tips"
        >
          Tips to find a hotel
        </MenuItem>
        <MenuItem
          className={classes.font}
          onClick={toggleMenu}
          component={Link}
          to="/fashion-style"
        >
          Fashion and Style
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Ideas;

