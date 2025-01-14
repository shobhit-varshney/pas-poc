import React from "react";
import ReactEcharts from "echarts-for-react"; 
import moment from "moment";
// Heatmap Data Feed section------------
// const hours = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
//   ];
const hours = [
  1568160683.5443,1525168800000,1656312429,1656226029,1656139629,1656053229,1655707629,1655102829,1609439400,
  1525168800000,1656312429,1656226029,1656139629,1656053229,1655707629,1655102829,1609439400,
  1525168800000,1656312429,1656226029,1656139629,1656053229,1655707629,1655102829,1609439400,
  1525168800000,1656312429,1656226029,1656139629,1656053229,1655707629,1655102829,1609439400,
  1525168800000,1656312429,1656226029,1656139629,1656053229,1655707629,1655102829,1609439400
];
  const days = [
    50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1900, 1950, 2000
  ];
  const data = [[0, 9, 50], [0, 10, 50], [0, 20, 60], [0, 3, 70], [0, 4, 80], [0, 5, 90], [0, 6, 100], [0, 7, 0], [0, 8, 0], [0, 9, 10], [0, 10, 20], [0, 11, 20], [0, 12, 40], [0, 13, 10], [0, 14, 10], [0, 15, 30], [0, 16, 40], [0, 17, 60], [0, 18, 40], [0, 19, 40], [0, 20, 30], [0, 21, 30], [0, 22, 20], [0, 23, 50], [1, 0, 70], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 50], [1, 11, 20], [1, 12, 20], [1, 13, 60], [1, 14, 90], [1, 15, 100], [1, 16, 60], [1, 17, 70], [1, 18, 80], [1, 19, 100], [1, 20, 50], [1, 21, 50], [1, 22, 70], [1, 23, 20], [2, 0, 10], [2, 1, 10], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 30], [2, 11, 20], [2, 12, 10], [2, 13, 90], [2, 14, 80], [2, 15, 10], [2, 16, 60], [2, 17, 50], [2, 18, 50], [2, 19, 50], [2, 20, 70], [2, 21, 40], [2, 22, 20], [2, 23, 40], [3, 0, 70], [3, 1, 30], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 10], [3, 9, 0], [3, 10, 50], [3, 11, 40], [3, 12, 70], [3, 13, 100], [3, 14, 100], [3, 15, 100], [3, 16, 90], [3, 17, 50], [3, 18, 50], [3, 19, 100], [3, 20, 60], [3, 21, 40], [3, 22, 40], [3, 23, 10], [4, 0, 10], [4, 1, 30], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 10], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 20], [4, 10, 40], [4, 11, 40], [4, 12, 20], [4, 13, 40], [4, 14, 40], [4, 15, 100], [4, 16, 100], [4, 17, 10], [4, 18, 80], [4, 19, 50], [4, 20, 30], [4, 21, 70], [4, 22, 30], [4, 23, 0], [5, 0, 20], [5, 1, 10], [5, 2, 0], [5, 3, 30], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 20], [5, 9, 0], [5, 10, 40], [5, 11, 10], [5, 12, 50], [5, 13, 10], [5, 14, 50], [5, 15, 70], [5, 16, 100], [5, 17, 60], [5, 18, 0], [5, 19, 50], [5, 20, 30], [5, 21, 40], [5, 22, 20], [5, 23, 0], [6, 0, 10], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 10], [6, 11, 0], [6, 12, 20], [6, 13, 10], [6, 14, 30], [6, 15, 40], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 10], [6, 21, 20], [6, 22, 20], [6, 23, 60], [12, 0, 70], [22, 1, 0], [22, 2, 0], [22, 3, 0], [22, 4, 0], [22, 5, 0], [22, 6, 0], [22, 7, 0], [22, 8, 0], [22, 9, 0], [22, 10, 50], [22, 11, 20], [22, 12, 20], [22, 13, 60], [22, 14, 90], [22, 15, 100], [22, 16, 60], [22, 17, 70], [22, 18, 80], [22, 19, 100], [22, 20, 50], [22, 21, 50], [22, 22, 70], [22, 23, 20], [24, 28, 20], [15, 29, 70], [20, 2, 50], [23, 24, 30], [23, 9, 50], [23, 13, 50], [23, 21, 60], [23, 3, 70], [23, 4, 80], [23, 5, 90], [23, 6, 100], [23, 7, 0], [23, 8, 0], [23, 9, 10], [23, 13, 20], [23, 11, 20], [23, 12, 40], [23, 13, 10], [23, 14, 10], [23, 15, 30], [23, 16, 40], [23, 17, 60], [23, 18, 40], [23, 19, 40], [23, 21, 30], [23, 21, 30], [23, 22, 20], [23, 23, 50], [20, 0, 70], [20, 10, 0], [20, 2, 0], [20, 3, 0], [20, 14, 0], [20, 18, 0], [20, 19, 0], [20, 7, 0], [20, 8, 0], [20, 9, 0], [20, 10, 50], [20, 11, 20], [20, 12, 20], [20, 13, 60], [20, 14, 90], [20, 18, 100], [20, 19, 60], [20, 17, 70], [20, 18, 80], [20, 19, 100], [20, 20, 50], [20, 21, 50], [20, 22, 70], [20, 23, 20], [24, 0, 10], [24, 10, 30], [24, 2, 0], [24, 3, 0], [24, 14, 0], [24, 18, 10], [24, 19, 0], [24, 7, 0], [24, 8, 0], [24, 9, 20], [24, 10, 40], [24, 11, 40], [24, 12, 20], [24, 13, 40], [24, 14, 40], [24, 18, 100], [24, 19, 100], [24, 17, 10], [24, 18, 80], [24, 19, 50], [24, 20, 30], [24, 21, 70], [24, 22, 30], [24, 23, 0], [28, 0, 20], [28, 10, 10], [28, 2, 0], [28, 3, 30], [28, 14, 0], [28, 18, 0], [28, 19, 0], [28, 7, 0], [28, 8, 20], [28, 9, 0], [28, 10, 40], [28, 11, 10], [28, 12, 50], [28, 13, 10], [28, 14, 50], [28, 18, 70], [28, 19, 100], [28, 17, 60], [28, 18, 0], [28, 19, 50], [28, 20, 30], [28, 21, 40], [28, 22, 20], [28, 23, 0], [29, 0, 10], [29, 10, 0], [29, 2, 0], [29, 3, 0], [29, 14, 0], [29, 18, 0], [29, 19, 0], [29, 7, 0], [29, 8, 0], [29, 9, 0], [29, 10, 10], [29, 11, 0], [29, 12, 20], [29, 13, 10], [29, 14, 30], [29, 18, 40], [29, 19, 0], [29, 17, 0], [29, 18, 0], [29, 19, 0], [29, 20, 10], [29, 21, 20], [29, 22, 20], [29, 23, 60]]
    .map(function (item) {
      return [item[1], item[0], item[2] || '-'];
    });

  // end-----------
function HeatMap(){

    const heatMap = {

        tooltip: {
          position: "top"
        },
        title: {
          top: 10,
          left: 'center',
          text: 'Rejection Code Heatmap'
        },
        grid: {
          height: "50%",
          top: "10%"
        },
        xAxis: {
          type: "category",
          axisLabel: {
            formatter: function(value){
                    return moment.unix(value).format('D/MM');;
            }},
          data: hours,
          splitArea: {
            show: true
          }
        },
        yAxis: {
          type: "category",
          data: days,
          splitArea: {
            show: true
          }
        },
        visualMap: {
          min: 0,
          max: 100,
          calculable: true,
          orient: "horizontal",
          left: "center",
          bottom: "15%",
          inRange: {
            color: ["#3E3301","#635203","#806A02", "#9A7F03", "#BA9904", "#D6B104", "#E8BF03", "#FDD104"]
          }
        },
        series: [
          {
            type: "heatmap",
            data: data,
          }
        ]
      };
      return <ReactEcharts theme={'dark'} option={heatMap} />;

}
export default HeatMap;