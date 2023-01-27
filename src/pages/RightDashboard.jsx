import React, { useState } from 'react';
import Table2 from '../components/Table2';
import { Switch } from '@mui/material';
import DoughnutComp from '../components/DoughnutComp';


export default function RightDashboard() {
    const [isTable, setIsTable] = useState(false);

    const handleChange = (event) => {
        setIsTable(event.target.checked);
    };

    return (
        <>
            <div>
                <Switch style={{ display: "flex", flexDirection: "column-reverse", justifyContent: "flex-end" }} checked={isTable} onChange={handleChange} />
                {isTable ? (
                    <Table2 />
                ) : (
                    <DoughnutComp />
                )}
            </div>
        </>
    )
}