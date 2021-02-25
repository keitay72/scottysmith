// import React from 'react';
// const fs = require('fs')
// newsData = fs.readFileSync('./newsData.json', 'utf-8')
// stockData = JSON.parse(newsData)
// console.log(stockData[1]);
import "./StockNews.css";

const newsData = {
    "symbols": [
        "AAPL"
    ],
    "timestamp": "2020-03-26T23:52:51.000Z",
    "title": "Apple (AAPL): Despite Likely iPhone 12 Delays, the Risk-Reward Remains Compelling, Says Analyst",
    "url": "https://finance.yahoo.com/news/apple-aapl-despite-likely-iphone-235251688.html",
    "source": "finance yahoo",
    "summary": "When considering the fortunes of the FAANG family since the viral outbreak, it appears Apple (AAPL) has most to lose. Amazon and Netflix can count their internet driven models as particularly well set up for a hibernation period. And while Google and Facebook stand to lose significant advertising revenue",
    "image": "https://s.yimg.com/uu/api/res/1.2/Su.8VniRbi_GL2B3BruK5w--~B/aD0zMzc7dz0xMDI0O3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/smarteranalyst_347/6909df17d6ef3af25ac79e2e6c0078d5",
    "keywords": [
        "aapl"
    ]
}

// console.log(newsData.symbols)

const currentdate = new Date();
const datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth()
    + "/" + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();

console.log(datetime);

function StockNews() {
    return (
        <div className="sn_container">
            <a className="news_link" href={newsData.url}>
                {/* <h2>{newsData.source}</h2> */}
                <div className="source_container">
                    <div className="lightning_icon"></div>
                    <div className="source">{newsData.source}</div>
                    <div className="time">{newsData.timestamp}</div>
                </div>
                <div>{newsData.title}</div>
                <div>{newsData.symbols}</div>
                <div className="news_img" src={newsData.image} alt=""></div>
            </a>
        </div>
    )
};

export default StockNews;