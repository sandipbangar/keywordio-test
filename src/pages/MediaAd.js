import React from "react";
import { Typography, Card, Paper, CardContent, CardMedia } from "@mui/material";
import "../styles/CardsStyle.css";
import { Route, Routes } from "react-router-dom";
import MediaAdForm from "./MediaAdForm";

const MediaAd = () => {
  return (
    <div className="box">
      {/* <Checkbox
        name="checkbox2"
        checked={isCheckbox2Checked}
        onChange={handleCheckbox2Change}
        inputProps={{ "aria-label": "controlled" }}
      /> */}
      <Routes>
        <Route path="/mediaadform" element={<MediaAdForm />} />
      </Routes>
      <div className="cardcontent">
        <CardMedia
          className="media-img"
          component="img"
          image="https://source.unsplash.com/random"
          alt="unsplash img"
        />
        <div className="card-text">
          <div className="text">
            <Typography color="text.secondary">Create</Typography>
          </div>
          <h3 className="text-ad">Media Ad</h3>
        </div>
      </div>
    </div>
  );
};

export default MediaAd;
