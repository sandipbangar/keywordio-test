import React from 'react';
import LeftDashboard from "./LeftDashBoard";
import RightDashboard from "./RightDashboard";
import "../styles/DashBoard.css"

export default function DashBoard () {
  return (
    <div className='DashStyle' item>
      <dic className='left'><LeftDashboard/></dic>
      <div className='right'><RightDashboard/></div>
    </div>
  )
}