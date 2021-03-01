// frontend/src/components/Charts/index.js
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLineDataByList } from '../../store/stockData.js';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, Legend } from "recharts";
import './StockChart.css';

export default function Stockchart({ lineData }) {

    return (
        <div className="graph-container">
            <ResponsiveContainer width="100%" className="response-container">
                <LineChart
                    // width={200}
                    // height={100}
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