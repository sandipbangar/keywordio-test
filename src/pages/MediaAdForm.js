import React from "react";
import {
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import "../styles/MediaAdForm.css";
import {useNavigate } from "react-router-dom";

export default function MediaAdForm () {
  const navigate = useNavigate();

  return (
    <>
      <Card className="card2">
        <div className="heading2">Create Text and Media</div>
        <CardContent>
          <Grid className="container-box2" spacing={1}>
            <Grid xs={12} item className="top-grid2">
              <Grid className="top-grid-headers2" xs={12}>
                <Grid className="header2" xs={8}>
                  <TextField
                    label="Heading 01"
                    placeholder="Add a heading that would make users interested"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid className="header2" xs={8}>
                  <TextField
                    label="Heading 02"
                    placeholder="Add a heading that would make users interested"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid className="description2" xs={8}>
                <TextField
                  label="Description 01"
                  placeholder="Add primary text to help users understand more about your products, services or offers"
                  variant="outlined"
                  fullWidth
                  id="description"
                  multiline
                  rows={4}
                  maxWidth
                />
              </Grid>
            </Grid>

            <Grid className="mid-grid2" item xs={12}>
              <Grid className="mid-fields2" xs={4}>
                <TextField
                  label="Landscape Marketing Image (1.9:1)"
                  placeholder="Add the URL of the image you want to use for the ad"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid className="mid-fields2" xs={4}>
                <TextField
                  label="Potrait Marketing Image (4:5)"
                  placeholder="Add the URL of the image you want to use for the ad"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid className="mid-fields2" xs={4}>
                <TextField
                  label="Square Marketing Image (1:1)"
                  placeholder="Add the URL of the image you want to use for the ad"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid xs={12} className="video-field2">
              <TextField
                label="Video URL"
                placeholder="Add the URL of the video you want to use for the ad"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item className="bottom-grid2" xs={12}>
              <Grid className="bottom-grid-fields2" xs={6}>
                <TextField
                  label="Business Name"
                  placeholder="Add your business name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid className="bottom-grid-fields2" xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Button Label
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="ButtonLabel"
                    placeholder="Select a label that best suits your ad"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid className="web-field2" xs={12} item>
            <TextField
              label="Website URL"
              placeholder="Add a URL of the landing page you want to redirect users to"
              variant="outlined"
              fullWidth
            />
          </Grid>
          </Grid>

        </CardContent>
        <Grid className="btn2">
        <Button variant="contained" onClick={() => navigate('/createads')}>Back</Button>
          <Button variant="contained" onClick={() => navigate("/submitted")}>Submit</Button>
        </Grid>
      </Card>
    </>
  );
};