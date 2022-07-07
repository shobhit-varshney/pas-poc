import React, { useState, useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
//import "./Graph.css"
import Pie from "./Pie"
import HeatMap from "./HeatMap"
import Gauge from "./Gauge"
import SingleStat from "./SingleStat"
import Point from './Point'
import LCD from './Lcd'
import Bar from './Bar'
import StackedBar from './StackedBar';
import Line from './Line'
import Discrete from './Discrete'
import * as echarts from 'echarts';

import Table from './Table';
import Export from './Export'

import GridLayout from "react-grid-layout";
import "./ReactGrid.css"
import Content from "./../../Layouts/Content/index";
import Nav from "../../Layouts/Content/Nav";


const layout = [
    { i: "a", x: 0, y: 0, w: 3, h: 5 },
    { i: "b", x: 3, y: 0, w: 3, h: 5 },
    { i: "c", x: 6, y: 0, w: 3, h: 5 },
    { i: "d", x: 9, y: 0, w: 3, h: 5 },
    { i: "e", x: 0, y: 5, w: 7, h: 8 },
    { i: "f", x: 7, y: 5, w: 5, h: 8 },
    { i: "g", x: 0, y: 13, w: 7, h: 8 },
    { i: "h", x: 7, y: 13, w: 5, h: 8 },
   
    
  ];

  
 

const ReactGrid = (props) => {

  const [grid,setGrid]=useState(false);
  const [val,setVal]=useState();

  useEffect(() => {
    val && localStorage.setItem("grid-layout", JSON.stringify(grid));
    setVal(false);
}, [val])

const handleCallback = (childData) =>{
  setVal(childData);
}

  const getLayouts = () => {
    const savedLayouts = localStorage.getItem("grid-layout");
  
    return savedLayouts ? JSON.parse(savedLayouts) : layout ;
  };


  const handleLayoutChange = (layout) => {
   //const lay = JSON.stringify(layout);
    setGrid(layout);
    
  };

  return (
    
    <>
    <Nav  parentCallback = {handleCallback}>
    <GridLayout
    className="layout"
    layout={getLayouts()}
    cols={12}
    rowHeight={30}
    width={1200}
    
    onLayoutChange={handleLayoutChange}
  >
    
    <div key="a"><SingleStat value='1,798'></SingleStat></div>
    <div key="b"><SingleStat value='2,561'></SingleStat></div>
    <div key="c"><Gauge value="76" risk="#7CFFB2"></Gauge></div> 
    <div key="d"><Gauge value="26" risk="#FF6E76"></Gauge></div>
    <div key="e"><Discrete></Discrete></div>
    <div key="f"><Pie type="dataList" title='Cards by Card Setup'></Pie></div>
    <div key="g"><Line></Line></div>
    <div key="h"><Pie type="dataList2" title='Cards by Job Setup'></Pie></div>
    
    
  </GridLayout>

  
  </Nav>  
  </>
  );

}

export default ReactGrid;