// import React from 'react';
// const fs = require('fs')
// newsData = fs.readFileSync('./newsData.json', 'utf-8')
// stockData = JSON.parse(newsData)
// console.log(stockData[1]);
import "./StockNews.css";


// console.log(newsData.symbols)

const currentdate = new Date();
const datetime = currentdate.getFullYear() + "-" + currentdate.getMonth()
    + "-" + currentdate.getDay() + "T"
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();

console.log(datetime);

function StockNews({ newsData }) {
    if (!newsData) {
        return (
            <h1>Loading news....</h1>
        )
    }
    return (
        <div className="news-div">{newsData.map((news) => {
            return (
                <div className="sn_container">
                    <a target="_blank" className="news_link" href={news.url}>
                        {/* <h2>{news.source}</h2> */}
                        <div>
                            <div className="source_container">
                                <div className="lightning_icon"></div>
                                <div className="source">{news.source}</div>
                                <div className="time">{news.timestamp}</div>
                            </div>
                            <div>{news.title}</div>
                            <div>{news.symbols}</div>
                        </div>
                        <img className="news_img" src={news.image} alt="" />
                    </a>
                </div>
            )
        })}
        </div>
    )
};

export default StockNews;