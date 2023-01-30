import React from "react";
import {
  Typography,
  Card,
  Paper,
  CardContent,
  CardMedia,
} from "@mui/material";
import "../styles/CardsStyle.css";
import { Route, Routes } from "react-router-dom";
import MediaAdForm from "./MediaAdForm";

const MediaAd = () => {
  return (
    <Paper elevation={1} className="box">
      {/* <Checkbox
        name="checkbox2"
        checked={isCheckbox2Checked}
        onChange={handleCheckbox2Change}
        inputProps={{ "aria-label": "controlled" }}
      /> */}
      <Routes>
        <Route path="/mediaadform" element={<MediaAdForm />} />
      </Routes>
      <Card className="cardcontent">
        <CardMedia
          className="media-img"
          component="img"
          image="https://source.unsplash.com/random"
          alt="unsplash img"
        />
        <CardContent className="text">
          <Typography color="text.secondary">Create</Typography>
          <Typography gutterBottom variant="h5">
            Media Ad
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default MediaAd;
