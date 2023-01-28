import React, { useState } from "react";
import {
  Typography,
  Card,
  Paper,
  CardContent,
  CardMedia,
  Checkbox,
} from "@mui/material";
import "../styles/CardsStyle.css";
import { Route, useNavigate, Routes } from "react-router-dom";
import MediaAdForm from "./MediaAdForm";

const MediaAd = () => {
  const navigate = useNavigate();
  const [isCheckbox2Checked, setIsCheckbox2Checked] = useState(false);

  const handleCheckbox2Change = (event) => {
    setIsCheckbox2Checked(event.target.checked);
  };
  const handleButtonClick = () => {
    if (isCheckbox2Checked) {
      navigate("/mediaadform");
    }
  };
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
