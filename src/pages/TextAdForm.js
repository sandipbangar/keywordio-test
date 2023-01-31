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
  Modal,
  form,
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
  width: 300,
  height: 150,
  bgcolor: "background.paper",
  border: "2px solid off-white",
  opacity: "80%",
  boxShadow: 40,
  p: 4,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

export default function TextAdForm() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [name, setName]= useState("");

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
      <Card className="card1">
        <div className="heading1">Create Text and Media</div>
        <CardContent>
          <Grid className="container-box1" spacing={1}>
            <Grid className="left-side1" xs={6} item>
              <Grid className="left-field1" xs={6}>
                <form>
                  <label style={{display:"block"}}>
                    Enter your name:
                    <input
                      type="text"
                      value={name}
                      placeholder="abcd"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </form>
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
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                />
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
