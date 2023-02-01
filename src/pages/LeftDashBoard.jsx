import { Paper } from '@mui/material';
import React from 'react';
import LeftTableComp from "../components/LeftTableComp"
import "../styles/LeftDashboardStyle.css";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


export default function DashBoard() {
  return (
    <>
      <Paper>
        <div className='left-db-container'>
        <div className='header-left-dash'>
          <h1 className='header-ad'>Ad Insights</h1>
          <HelpOutlineIcon/>
        </div>
          <LeftTableComp />
        </div>
      </Paper>
    </>
  )
}