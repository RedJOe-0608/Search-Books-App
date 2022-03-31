import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import NavBar from "./NavBar";

const useStyles = makeStyles((theme) => {
  return {
    pageLight: {
      background: "#f9f9f9",
      width: "100%",
      height: "100%",
      transition: "all 0.3s",
    },
    pageDark: {
      background: "#121212",
      width: "100%",
      height: "100%",
      transition: "all 0.3s",
    },
    toolbar: {
      minHeight: "64px",
    },
  };
});

const Layout = ({ children, mode, handleMode, name }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const classes = useStyles();
  return (
    <>
      <NavBar
        handleMode={handleMode}
        mode={mode}
        handleDrawer={handleDrawer}
        showDrawer={showDrawer}
      />
      <div className={mode ? classes.pageDark : classes.pageLight}>
        <div className={classes.toolbar}></div>

        {children}
      </div>
    </>
  );
};

export default Layout;
