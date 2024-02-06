import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"; // Import the CSS file

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          React Context API
        </Typography>
        <ul className="nav">
          <li className="prod1">
            <Button
              component={Link}
              to="/"
              color="inherit"
              startIcon={<HomeIcon />}
              className="linkButton"
            >
              Home Page
            </Button>
          </li>
          <li className="prod2">
            <Button
              component={Link}
              to="/cart"
              color="inherit"
              startIcon={<ShoppingCartIcon />}
              className="linkButton"
            >
              Cart
            </Button>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
