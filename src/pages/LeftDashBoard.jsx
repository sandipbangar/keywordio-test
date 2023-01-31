import { Paper } from '@mui/material';
import React from 'react';
import LeftTableComp from "../components/LeftTableComp"
import "../styles/LeftDashboardStyle.css"

export default function DashBoard() {
  return (
    <>
      <Paper>
        <div className='left-db-container'>
          <LeftTableComp />
        </div>
      </Paper>
    </>
  )
}