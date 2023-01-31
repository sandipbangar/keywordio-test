import React, { useState } from 'react';
import RightTableComp from '../components/RightTableComp';
import { Switch, Grid, Paper } from '@mui/material';
import DoughnutComp from '../components/DoughnutComp';
import "../styles/RightDashboardStyle.css"


export default function RightDashboard() {
    const [isTable, setIsTable] = useState(false);

    const handleChange = (event) => {
        setIsTable(event.target.checked);
    };

    return (
        <>
        <Paper>
            <div className='right-db-container'>
                {/* <div className="switch-grid">
                    <Switch
                        // style={{
                        //     display: "flex",
                        //     flexDirection: "column-reverse",
                        //     justifyContent: "flex-end"
                        // }}
                        checked={isTable}
                        onChange={handleChange}
                    />
                </div> */}
                <div
                // className="component-grid"
                >
                    {/* {isTable ? ( */}
                    <RightTableComp />
                    {/* ) : ( */}
                    {/* <DoughnutComp /> */}
                    {/* )} */}
                </div>
            </div>
            </Paper>
        </>
    )
}