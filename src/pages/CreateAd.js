import { Button, Paper, Typography, Checkbox } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MediaAd from "./MediaAd";
import TextAd from "./TextAd";
import "../styles/CreateAdStyle.css";
import TextAdForm from "./TextAdForm";
import MediaAdForm from "./MediaAdForm";
import { useState } from "react";
import { Route, useNavigate, Routes } from "react-router-dom";

export default function CreateAd() {
  const navigate = useNavigate();
  const [isCheckbox1Checked, setIsCheckbox1Checked] = useState(false);
  const [isCheckbox2Checked, setIsCheckbox2Checked] = useState(false);

  const handleCheckbox1Change = (event) => {
    setIsCheckbox1Checked(event.target.checked);
  };

  const handleCheckbox2Change = (event) => {
    setIsCheckbox2Checked(event.target.checked);
  };

  const handleButtonClick = () => {
    if (isCheckbox1Checked) {
      navigate("/textadform");
    } else if (isCheckbox2Checked) {
      navigate("/mediaadform");
    }
  };

  return (
    <>
      <Paper className="createad-container" fullWidth>
        <div className="create-ad">Create Ads</div>
        <div item className="card-container">
          <div item className="cards">
            <Checkbox
              name="checkbox1"
              checked={isCheckbox1Checked}
              onChange={handleCheckbox1Change}
              inputProps={{ "aria-label": "controlled" }}
            />
            <TextAd />
          </div>
          <div item className="cards">
            <Checkbox
              name="checkbox2"
              checked={isCheckbox2Checked}
              onChange={handleCheckbox2Change}
              inputProps={{ "aria-label": "controlled" }}
            />
            <MediaAd />
          </div>
        </div>
        <div className="btn-div">
          <Button
            className="next-btn"
            variant="contained"
            onClick={handleButtonClick}
          >
            Next
          </Button>
          <Routes>
            <Route path="/textadform" element={<TextAdForm />} />
            <Route path="/mediaadform" element={<MediaAdForm />} />
          </Routes>
        </div>
      </Paper>
    </>
  );
}
