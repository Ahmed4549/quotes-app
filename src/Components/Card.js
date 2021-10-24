import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const button = {
  textTransform: "capitalize",
  color: "#d1079d",
  border: "1px solid #d1079d",
};

export default function CustomCard({ data, getQuote }) {
  return (
    <Box sx={{ minWidth: 275, width: 400 }}>
      <Card sx={{ borderRadius: "10px" }} elevation={0}>
        <CardContent>
          <Typography gutterBottom variant="button">
            {data ? data.content : "Fetching Quote"}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            ~ {data?.author}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: ".5rem",
            }}
          >
            <Button onClick={getQuote} style={button} variant="outlined">
              Get New Quote
            </Button>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}
