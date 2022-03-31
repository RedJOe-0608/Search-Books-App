import React, { useEffect, useState } from "react";
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Dropdown from "./Dropdown";
import { Link, useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRef } from "react";
import { Drawer } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Divider from "@mui/material/Divider";
import { motion } from "framer-motion";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import "../App.css";

const useStyles = makeStyles({
  navbarLight: {
    backgroundColor: "#f7f7fa",
    transition: "all 0.3s",
    color: "black",
  },
  navbarDark: {
    backgroundColor: "#181818",
    color: "#f7f7fa",
    transition: "all 0.3s",
  },
  navButtons: {
    transform: "translate(800px)",
    width: "350px",
    display: "flex",
    justifyContent: "space-between",
  },

  link: {
    textDecoration: "none",
    marginLeft: "25px",
    color: "#7b1fa2",
  },
  head: {
    cursor: "pointer",
    textDecoration: "none",
    marginLeft: "30px",
  },
  rotate: {
    transform: "Rotate(180deg)",
    transition: "all 350ms",
  },
  drawer: {
    width: "240px",
  },
  drawerPaper: {
    width: "240px",
  },
  drawerItemLight: {
    "&:hover": {
      backgroundColor: "#7b1fa2",
      transition: "all 0.3s",
      color: "#f7f7fa",
      cursor: "pointer",
    },
  },
  drawerItemDark: {
    "&:hover": {
      backgroundColor: "white",
      transition: "all 0.3s",
      color: "#7b1fa2",
      cursor: "pointer",
    },
  },
});

const NavBar = ({ handleMode, mode, handleDrawer, showDrawer, name }) => {
  const [click, setClick] = useState(false);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const classes = useStyles();

  //To fetch menu items
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("http://localhost:5000/menuItems");
      const data = await response.json();
      setItems(data);
      console.log(data);
    };
    fetchItems();
  }, []);

  const handleClick = () => {
    setClick(!click);
  };

  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setClick(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div>
      <AppBar>
        <Toolbar className={mode ? classes.navbarDark : classes.navbarLight}>
          <MenuIcon style={{ cursor: "pointer" }} onClick={handleDrawer} />
          <Drawer
            PaperProps={
              mode
                ? {
                    sx: {
                      backgroundColor: "#121212",
                      color: "#f7f7fa",
                    },
                  }
                : ""
            }
            className={classes.drawer}
            classes={{ paper: classes.drawerPaper }}
            open={showDrawer}
            onClose={handleDrawer}
            variant="temporary"
            anchor="left"
          >
            <List>
              <Typography
                style={{ marginLeft: "10px", marginBottom: "12px" }}
                variant="h6"
              >
                Categories
              </Typography>
              {items.map((item) => (
                <>
                  {item.type ? (
                    <Typography
                      style={{
                        marginLeft: "10px",
                        marginBottom: "12px",
                        marginTop: "12px",
                      }}
                      variant="h6"
                    >
                      {item.text}
                    </Typography>
                  ) : (
                    <>
                      <ListItem
                        key={item.text}
                        className={
                          mode
                            ? classes.drawerItemDark
                            : classes.drawerItemLight
                        }
                        onClick={() => navigate(item.path)}
                      >
                        <ListItemIcon>
                          <ArrowForwardIosIcon />
                        </ListItemIcon>
                        <ListItemText
                          onClick={handleDrawer}
                          primary={item.text}
                        />
                      </ListItem>
                      <Divider variant="inset" />
                    </>
                  )}
                </>
              ))}
            </List>
          </Drawer>
          <motion.div
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: "61",
            }}
          >
            <Typography variant="h4" className={classes.head}>
              <Link className={classes.link} to="/Search">
                Search Books
              </Link>
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className={classes.navButtons}
          >
            <div ref={menuRef}>
              <Button
                onClick={handleClick}
                className={classes.btn}
                style={{ marginLeft: "20px" }}
                endIcon={
                  !click ? (
                    <KeyboardArrowDownIcon />
                  ) : (
                    <KeyboardArrowDownIcon className={classes.rotate} />
                  )
                }
              >
                Popular Genres
              </Button>

              <Dropdown click={click} />
            </div>
            <IconButton onClick={handleMode}>
              {mode ? (
                <Brightness2Icon style={{ color: "#f7f7fa" }} />
              ) : (
                <BrightnessHighIcon />
              )}
            </IconButton>
            {/* <Button onClick={handleMode}>Toggle Dark</Button> */}
          </motion.div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
