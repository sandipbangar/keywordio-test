import React, { Component } from 'react';
import ApexCharts from 'react-apexcharts';

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
      <ApexCharts options={this.state.options} series={this.state.series} type="donut" width={600} />
    );
  }
}

export default DoughnutComp;
