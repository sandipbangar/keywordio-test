import {
  CardContent,
  Grid,
  Select,
  TextField,
  FormControl,
  Button,
  Box,
  Modal,
  Paper
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React, { useEffect, useState } from "react";
import "../styles/TextAdForm.css";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 150,
  bgcolor: "background.paper",
  background: "white",
  opacity: 85,
  border: "2px solid off-white",
  boxShadow: 40,
  p: 4,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

export default function TextAdForm() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => setOpen(false), 600);
  };
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        navigate(-1);
      }, 600);
    }
  }, [open]);

  return (
    <>
      <Paper className="card1" fullWidth>
        <div className="heading1">Create Text and Media</div>
        <CardContent>
          <Grid className="container-box1" spacing={1}>
            <Grid className="left-side1" xs={6} item>
              <Grid className="left-field1" xs={6}>
                <h1 className="labels">Heading 01</h1>
                <TextField
                  placeholder="Add a heading that would make users interested"
                  variant="outlined"
                  fullWidth
                ></TextField>
              </Grid>
              <Grid className="left-field1" xs={6}>
              <h1 className="labels">Heading 02</h1>
                <TextField
                  placeholder="Add a heading that would make users interested"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid className="left-field1" xs={6}>
              <h1 className="labels">Business Name</h1>
                <TextField
                  placeholder="Add your business name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid className="right-side1" xs={12} sm={6} item>
              <Grid className="right-field1">
                <h1 className="labels">Description 01</h1>
                <TextField
                  fullWidth
                  id="description"
                  multiline
                  rows={5.4}
                  placeholder="Add primary text to help users understand more about your products, services or offers"
                  
                />
              </Grid>
              <Grid className="right-field1">
                <FormControl fullWidth>
                  <h1 className="labels">Button Label</h1>
                  <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    placeholder="Select a label that best suits your ad"
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className="web-field1" xs={12} sm={6}>
            <h1 className="labels">Website URL</h1>
            <TextField
              placeholder="Add a URL of the landing page you want to redirect users to"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </CardContent>
        <Grid item className="btn1">
          <Grid className="button-grid">
            <Button
              className="button"
              style={{
                border: "1px solid lightgray",
                color: "black",
                fontWeight: "bold",
              }}
              onClick={() => navigate(-1)}
            >
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
                <CheckCircleIcon
                  fontSize="large"
                  color="primary"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems:"center"
                  }}
                />
                <h1 id="modal-modal-title" variant="h6" component="h2">
                  Submitted
                </h1>
              </Box>
            </Modal>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
