import React, { useState } from 'react';
import Table2 from '../components/Table2';
import { Switch, Grid } from '@mui/material';
import DoughnutComp from '../components/DoughnutComp';
import "../styles/RightDbStyle.css"


export default function RightDashboard() {
    const [isTable, setIsTable] = useState(false);

    const handleChange = (event) => {
        setIsTable(event.target.checked);
    };

    return (
        <>
            <div className='right-db-container'>
                <div className="switch-grid">
                <Switch style={{ display: "flex", flexDirection: "column-reverse", justifyContent: "flex-end" }} checked={isTable} onChange={handleChange} />
                </div>
                <div className="component-grid">
                {isTable ? (
                    <Table2 />
                ) : (
                    <DoughnutComp />
                )}
                </div>
                
            </div>
        </>
    )
}