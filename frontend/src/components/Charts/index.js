// import React, { PureComponent, useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import "./LineChart.css";

// const data = [
//     {
//         name: 'Page A',
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
//     {
//         name: 'Page B',
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//     },
//     {
//         name: 'Page C',
//         uv: 2000,
//         pv: 9800,
//         amt: 2290,
//     },
//     {
//         name: 'Page D',
//         uv: 2780,
//         pv: 3908,
//         amt: 2000,
//     },
//     {
//         name: 'Page E',
//         uv: 1890,
//         pv: 4800,
//         amt: 2181,
//     },
//     {
//         name: 'Page F',
//         uv: 2390,
//         pv: 3800,
//         amt: 2500,
//     },
//     {
//         name: 'Page G',
//         uv: 3490,
//         pv: 4300,
//         amt: 2100,
//     },
// ];

// class Example extends PureComponent {
//     static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

//     render() {
//         return (
//             <ResponsiveContainer width="100%" height="100%">
//                 <LineChart
//                     width={500}
//                     height={300}
//                     data={data}
//                     margin={{
//                         top: 5,
//                         right: 30,
//                         left: 20,
//                         bottom: 5,
//                     }}
//                 >
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//                     <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//                 </LineChart>
//             </ResponsiveContainer>
//         );
//     }
// }


import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLineDataByList } from '../../store/stockData.js';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, Legend } from "recharts";
import './StockChart.css';

export default function Stockchart({ lineData }) {

    console.log({ lineData });

    return (
        <div className="graph-container">
            <ResponsiveContainer className="response-container">
                <LineChart
                    width={200}
                    height={100}
                    data={lineData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="1 5" />
                    {/* <XAxis dataKey="x" /> */}
                    <YAxis />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Line name="High" type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line name="Open" type="monotone" dataKey="o" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
};