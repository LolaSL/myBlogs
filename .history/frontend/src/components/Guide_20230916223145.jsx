import React, { useState } from "react";
import useStyles from "./utils";
import { Menu, MenuItem, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Guide = () => {
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
        color="info"
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
       Israel Guide
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
        {" "}
        <MenuItem
          className={classes.font}
          onClick={toggleMenu}
          component={Link}
          to="/slide"
        >
          Top destinations
        </MenuItem>
        <MenuItem
          className={classes.font}
          onClick={toggleMenu}
          component={Link}
          to="/best-time-to-visit"
        >
          The best time to visit
        </MenuItem>
        <MenuItem
          className={classes.font}
          onClick={toggleMenu}
          component={Link}
          to="/wheather-and-climate"
        >
          Wheather & Climate
        </MenuItem>
        <MenuItem
          className={classes.font}
          onClick={toggleMenu}
          component={Link}
          to="/reasons-to-visit-israel"
        >
          Reasons to visit Israel
        </MenuItem>
        <MenuItem
          className={classes.font}
          onClick={toggleMenu}
          component={Link}
          to="/airport"
        >
          Ben Gurion Aeroport
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Guide;
