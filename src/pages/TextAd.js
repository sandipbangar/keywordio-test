import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Paper,
} from "@mui/material";
import "../styles/CardsStyle.css";

const TextAd = () => {
  return (
    <Paper elevation={1} className="box">
      <Card item className="cardcontent">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          What is Lorem Ipsum?
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </Typography>
        <Typography variant="body2">
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting,
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <Typography>
          emaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop
        </Typography>
        <CardContent className="text">
          <Typography color="text.secondary">Create</Typography>
          <Typography gutterBottom variant="h5">
            Text Ad
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default TextAd;
