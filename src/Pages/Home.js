import React, { useState, useEffect } from "react";
import { Container, Snackbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomCard from "../Components/Card";

const useStyles = makeStyles({
  container: {
    height: "80vh",
    padding: "2rem",
    display: "flex !important",
    // justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    "& .heading": {
      color: "white",
      fontSize: "4rem",
      margin: "1rem 0",
      marginBottom: "2rem",
    },
  },
});

const Home = () => {
  const classes = useStyles();
  const [quote, setQuote] = useState();
  const [error, setError] = useState(false);
  const url = "https://api.quotable.io/random";

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .catch((err) => setError(true));
  };
  return (
    <Container classes={{ root: classes.container }}>
      <Typography className="heading">Quotes App</Typography>
      <CustomCard data={quote} getQuote={getQuote} />
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={error}
        autoHideDuration={3000}
        message="Somthing Went Wrong!"
      />
    </Container>
  );
};

export default Home;
