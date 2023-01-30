import { Paper } from '@mui/material';
import React from 'react';
import LeftTableComp from "../components/LeftTableComp"
import "../styles/LeftDashboardStyle.css"

export default function DashBoard() {
  return (
    <>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <div className='left-db-container'>
          <LeftTableComp />
        </div>
      </Paper>
    </>
  )
}