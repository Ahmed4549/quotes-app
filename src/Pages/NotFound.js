import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    height: "80vh",
    padding: "2rem",
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& .heading": {
      color: "white",
      fontSize: "7rem",
    },
    "& .subHeading": {
      color: "white",
    },
  },
});

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className="heading">404</Typography>
      <Typography className="subHeading">Page Not Found</Typography>
    </div>
  );
};

export default NotFound;
