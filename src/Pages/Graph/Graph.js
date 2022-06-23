import React from 'react';
import ReactEcharts from 'echarts-for-react';
import "./Graph.css"
import Pie from "./Pie"
import Gauge from "./Gauge"
import SingleStat from "./SingleStat"
 
const Graph=()=>
{
  
  const heatMap = {
    
  };

  const table = {
    
  };

  const point = {
    
  };

  const bar = {
    
  };

  const stackedBar ={

  }

  const line = {
    
  };

  const singleStat = {
    
  };

  const gauge = {
    
  };

  const pie = {
    
  };  

  const discrete= {

  };

  const lcd = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: 'category',
      data: ['', '', '', '', '', ''],
    },
    series: [
      {
        name: '2021',
        type: 'bar',
        label: {
          show: true,
          position: 'right',
        },
        data: [18203, 23489, 29034, 34970, 31744, 30230],
        showBackground: true,
      },
    ],
  };
  return (
    <div>
      <h3>Graphs</h3>
      <div className="flex-container">
      <div>
        <p>Heat Map</p>
        <ReactEcharts option={heatMap} />
      </div>
      <div>
      <p>Table</p>
      <ReactEcharts option={table} />
      </div>
      <div>
      <p>Point Chart</p>
        <ReactEcharts option={point} />
      </div>
      <div>
      <p>Bar Chart</p>
      <ReactEcharts option={bar} />
      </div>
      <div>
      <p>Stacked Bar Chart</p>
        <ReactEcharts option={stackedBar} />
      </div>
      <div>
      <p>Line Chart</p>
      <ReactEcharts option={line} />
      </div>
      <div>
      <p>Single Stat</p>
        <SingleStat></SingleStat>
        {/* <ReactEcharts option={singleStat} /> */}
      </div>
      <div>
      <p>Gauge</p>
        <Gauge></Gauge>
      {/* <ReactEcharts option={gauge} /> */}
      </div>
      <div>
        <p>Pie Chart</p>
      <Pie></Pie>
        {/* <ReactEcharts option={pie} /> */}
      </div>
      <div>
      <p>Discrete Panel</p>
      <ReactEcharts option={discrete} />
      </div>
      <div>
      <p>LCD Gauge</p>
        <ReactEcharts option={lcd} />
      </div>
      </div>
    </div>
  );
  
}
 
export default Graph;