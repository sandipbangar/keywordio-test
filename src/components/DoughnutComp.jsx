import React, { Component } from 'react';
import ApexCharts from 'react-apexcharts';
import { Typography } from '@mui/material';
import "../styles/DoughnutStyle.css"

class DoughnutComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: 'donut',
        },
        labels: ['Male', 'Female', 'Unknown'],
        legend: {
          show: true,
          position: 'right',
        },
      },
      series: [40, 35, 25],
    };
  }

  render() {
    return (
      <>
        <div className="donut-container">
        <div className="paper3">
          <Typography className="donut-ad-insights">Ad Insights</Typography>
        </div>
          <ApexCharts className="donut" options={this.state.options} series={this.state.series} type="donut" width={550} />
        </div>
      </>

    );
  }
}

export default DoughnutComp;
