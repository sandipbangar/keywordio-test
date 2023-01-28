import React, { useState } from "react";
import { Typography, Card, CardContent, CardMedia, Paper, Checkbox } from "@mui/material";
import "../styles/CardsStyle.css";
import TextAdForm from "./TextAdForm";
import { Route, useNavigate, Routes } from "react-router-dom";

const TextAd = () => {
  const navigate = useNavigate();
  const [isCheckbox1Checked, setIsCheckbox1Checked] = useState(false);

  const handleCheckbox1Change = (event) => {
    setIsCheckbox1Checked(event.target.checked);
  };

  const handleButtonClick = () => {
    if (isCheckbox1Checked) {
      navigate("/textadform");
    }
  };

  return (
    <Paper elevation={1} className="box">
      {/* <Checkbox
        name="checkbox1"
        checked={isCheckbox1Checked}
        onChange={handleCheckbox1Change}
        inputProps={{ "aria-label": "controlled" }}
      /> */}
      <Routes>
        <Route path="/textadform" element={<TextAdForm />} />
      </Routes>
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
