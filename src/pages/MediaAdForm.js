import React, {useState, useEffect} from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  TextField,
  Grid,
  FormControl,
  Select,
  Button,
  Card,
  CardContent,
  Modal,
  Box,
  Typography
} from "@mui/material";
import "../styles/MediaAdForm.css";
import {useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 150,
  bgcolor: "background.paper",
  border: "2px solid off-white",
  opacity:"80%",
  boxShadow: 40,
  p: 4,
  display:"flex",
  flexDirection:"row",
  justifyContent:"center"
};

export default function MediaAdForm () {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => setOpen(false), 600);
  }

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        navigate(-1);
      }, 600);
    }
  }, [open]);

  return (
    <>
      <Card className="card2">
        <div className="heading2">Create Text and Media</div>
        <CardContent>
          <Grid className="container-box2" spacing={1}>
            <Grid item className="top-grid2" spacing={1}>
              <Grid className="top-grid-headers2" xs={6}>
                <Grid className="header2" xs={6}>
                  <h1 className="labels-media">Heading 01</h1>
                  <TextField
                    placeholder="Add a heading that would make users interested"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid className="header2" xs={6}>
                <h1 className="labels-media">Heading 02</h1>
                  <TextField
                    placeholder="Add a heading that would make users interested"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid className="description2" xs={6}>
              <h1 className="labels-media">Description 01</h1>
                <TextField
                  placeholder="Add primary text to help users understand more about your products, services or offers"
                  variant="outlined"
                  fullWidth
                  id="description"
                  multiline
                  rows={5.4}
                  maxWidth
                />
              </Grid>
            </Grid>

            <Grid className="middle-grid" item xs={12}>
              <Grid className="mid-fields2" xs={4}>
              <h1 className="labels-media">Landscape Marketing Image (1.9:1)</h1>
                <TextField
                  placeholder="Add the URL of the image you want to use for the ad"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid className="mid-fields2" xs={4}>
              <h1 className="labels-media">Potrait Marketing Image (4:5)</h1>
                <TextField
                  placeholder="Add the URL of the image you want to use for the ad"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid className="mid-fields2" xs={4}>
              <h1 className="labels-media">Square Marketing Image (1:1)</h1>
                <TextField
                  placeholder="Add the URL of the image you want to use for the ad"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid xs={12} className="video-field2">
            <h1 className="labels-media">Video URL</h1>
              <TextField
                placeholder="Add the URL of the video you want to use for the ad"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item className="bottom-grid2" xs={12}>
              <Grid className="bottom-grid-fields2" xs={6}>
              <h1 className="labels-media">Business Name</h1>
                <TextField
                  placeholder="Add your business name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid className="bottom-grid-fields2" xs={6}>
                <FormControl fullWidth>
                <h1 className="labels-media">ButtonLabel</h1>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    placeholder="Select a label that best suits your ad"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid className="web-field2" xs={12} item>
            <h1 className="labels-media">Website URL</h1>
            <TextField
              placeholder="Add a URL of the landing page you want to redirect users to"
              variant="outlined"
              fullWidth
            />
          </Grid>
          </Grid>
          <Grid item className="btn2">
          <Grid className="button-grid2">
            <Button className="button2" style={{border:"1px solid lightgray", color : "black", fontWeight:"bold"}} onClick={() => navigate(-1)}>
              Back
            </Button>
          </Grid>
          <Grid className="button-grid2">
            <Button className="button2" variant="contained" onClick={handleOpen}>
              Submit
            </Button>
            <Modal
              open={open}
              // onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <CheckCircleIcon fontSize="large" color="primary" style={{
                display:"flex", flexDirection:"row", justifyContent:"center"
              }}/>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Submitted
                </Typography>
              </Box>
            </Modal>
          </Grid>
        </Grid>
        </CardContent>
      </Card>
    </>
  );
};