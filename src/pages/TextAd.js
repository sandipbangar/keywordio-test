import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Checkbox,
} from "@mui/material";
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
    <div className="box">
      {/* <Checkbox
        name="checkbox1"
        checked={isCheckbox1Checked}
        onChange={handleCheckbox1Change}
        inputProps={{ "aria-label": "controlled" }}
      /> */}
      <Routes>
        <Route path="/textadform" element={<TextAdForm />} />
      </Routes>
      <div item className="cardcontent">
        <Typography color="text.secondary" gutterBottom>
          What is Lorem Ipsum?
        </Typography>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
        <br />
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting,
        <br />
        {'"a benevolent smile"'}
        <div className="card-text">
        <div className="text" color="text.secondary">
          Create
        </div>
        <h3 className="text-ad">Text Ad</h3>
        </div>
      </div>
    </div>
  );
};

export default TextAd;
