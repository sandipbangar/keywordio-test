import React from 'react';
import LeftDashboard from "./LeftDashBoard";
import RightDashboard from "./RightDashboard";

export default function DashBoard () {
  return (
    <div item style={{display:"flex", width:"100%", height:"100%"}}>
      <LeftDashboard/>
      <RightDashboard/>
    </div>
  )
}