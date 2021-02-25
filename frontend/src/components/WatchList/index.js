import React from 'react';
import "./WatchList.css"

function WatchList() {
    return (
        <div className="wl_container">
            {/* <h2>WatchList</h2> */}
            <table>
                <thead>
                    <tr>
                        <th colspan="2">Watch List</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>AAPL</td>
                        <td>122.93 USD -2.43 (1.91%)🔻</td>
                    </tr>
                    <tr>
                        <td>AAPL</td>
                        <td>122.93 USD -2.43 (1.91%)🔻</td>
                    </tr>
                    <tr>
                        <td>AAPL</td>
                        <td>122.93 USD -2.43 (1.91%)🔻</td>
                    </tr>
                    <tr>
                        <td>AAPL</td>
                        <td>122.93 USD -2.43 (1.91%)🔻</td>
                    </tr>
                    <tr>
                        <td>AAPL</td>
                        <td>122.93 USD -2.43 (1.91%)🔻</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default WatchList;