import {
  Card,
  CardContent,
  Grid,
  Select,
  TextField,
  InputLabel,
  FormControl,
  Button,
  Box,
  Typography,
  Modal
} from "@mui/material";
import React, { useState } from "react";
import "../styles/TextAdForm.css";
import CreateAd from "./CreateAd";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid off-white",
  opacity:"80%",
  boxShadow: 24,
  p: 4
};

export default function TextAdForm() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => setOpen(false), 600);
  }

  return (
    <>
      <Card className="card1">
        <div className="heading1">Create Text and Media</div>
        <CardContent>
          <Grid className="container-box1" spacing={1}>
            <Grid className="left-side1" xs={6} item>
              <Grid className="left-field1" xs={6}>
                <TextField
                  label="Heading 01"
                  placeholder="Add a heading that would make users interested"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid className="left-field1" xs={6}>
                <TextField
                  label="Heading 02"
                  placeholder="Add a heading that would make users interested"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid className="left-field1" xs={6}>
                <TextField
                  label="Business Name"
                  placeholder="Add your business name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid className="right-side1" xs={12} sm={6} item>
              <Grid className="right-field1">
                <TextField
                  fullWidth
                  id="description"
                  label="Description 01"
                  multiline
                  rows={4}
                  placeholder="Add primary text to help users understand more about your products, services or offers"
                  maxWidth
                />
              </Grid>
              <Grid className="right-field1">
                <FormControl fullWidth>
                  <InputLabel id="simple-select-label">Button Lable</InputLabel>
                  <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    label="Button Label"
                    placeholder="Select a label that best suits your ad"
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className="web-field1" xs={12} sm={6}>
            <TextField
              label="Website URL"
              placeholder="Add a URL of the landing page you want to redirect users to"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </CardContent>
        <Grid item className="btn1">
          <Grid className="button-grid">
            <Button className="button" style={{border:"1px solid lightgray", color : "black", fontWeight:"bold"}} onClick={() => navigate("/createads")}>
              Back
            </Button>
          </Grid>
          <Grid className="button-grid">
            <Button className="button" variant="contained" onClick={handleOpen}>
              Submit
            </Button>
            <Modal
              open={open}
              // onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Submitted
                </Typography>
              </Box>
            </Modal>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
