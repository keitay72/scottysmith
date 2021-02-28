// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getLineDataBySymbol } from '../../store/stockData.js';
// import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, Legend } from "recharts";
// import './StockChart.css';

// export default function Stockchart({ symbol }) {
//     const dispatch = useDispatch();
//     const { [symbol]: stockData } = useSelector(state => state.stockData.stocks);

//     useEffect(async () => {
//         await dispatch(getLineDataBySymbol(symbol));
//         console.log(stockData);
//     }, [dispatch, symbol]);

//     return (
//         <div className="graph-container">
//             {/* <h1>Stock Chart</h1> */}
//             {/* <h2>{symbol}</h2> */}
//             <ResponsiveContainer className="response-container">
//                 <LineChart
//                     width={200}
//                     height={100}
//                     data={stockData?.lineData}
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
//         </div>
//     )
// };