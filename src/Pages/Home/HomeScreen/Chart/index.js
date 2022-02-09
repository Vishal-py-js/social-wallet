import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['10:59PM', '11:59PM', '12:59PM', '1:59PM', '2:59PM', '3:59PM', '4:59PM', '5:59PM'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.9,
      backgroundColor: 'linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(108, 255, 119, 0.01) 97.96%)',
      borderColor: '#6CFF77',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [45, 59, 80, 81, 56, 46, 76, 66],
      //data: ["$ ETH", "$ ETH", "$ ETH", "$ ETH",]
      
    },
    
  ]
  
};

const options = {
  legend: {
    display: false,
    //position: "center"
  },
  layout:{
    padding: 70
  },
  scales: {
    xAxes: [{
      display: true,
      ticks:{
        padding: 60,
        fontColor: "gray",
        fontSize: 15
      },
      gridLines: {
        display: false,
      }
    }],
    yAxes: [{
      gridLines: {
          display: false,
      },
      ticks:{
        padding: 60,
        fontColor: "#fff",
        fontSize: 20
      },
      type: "linear",
      display: true,
      position: "left"
    }]
  },
  responsive: true,
  
}

class LineDemo extends Component {
  render() {
    return (
      <div>
        <Line ref="chart" data={data} options={options}/>
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}

export default LineDemo