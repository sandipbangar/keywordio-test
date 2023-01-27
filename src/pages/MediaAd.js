import React from "react";
import { Typography, Card, Paper, CardContent, CardMedia } from "@mui/material";
import "../styles/CardsStyle.css"

const MediaAd = () => {
  return (
    <Paper elevation={1} className="box">
      <Card className="cardcontent">
        <CardMedia
          className="media-img"
          component="img"
          image="https://source.unsplash.com/random"
          alt="unsplash img"
        />
        <CardContent className="text">
          <Typography color="text.secondary">
            Create
          </Typography>
          <Typography gutterBottom variant="h5">
            Media Ad
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default MediaAd;
