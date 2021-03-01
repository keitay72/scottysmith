import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getLineDataByList, getStockNews } from '../../store/stockData';
import { getStockInfo } from '../../store/stockData';
import Stockchart from '../Charts';
import StockInfo from './StockInfo';
import { useEffect } from 'react';
import StockNews from '../StockNews';
import './StockDetailPage.css';

export default function StockDetailPage() {
    const { symbol } = useParams();
    const dispatch = useDispatch();
    const { [symbol]: stockData } = useSelector((state) => state.stockData.stocks);

    useEffect(async () => {
        await dispatch(getLineDataByList([symbol]));
        await dispatch(getStockInfo(symbol));
        await dispatch(getStockNews(symbol));
    }, [dispatch, symbol])
    return (
        <div className="stock-detail-page">
            <h1>{symbol}</h1>
            <StockInfo info={stockData?.info} />
            <Stockchart lineData={stockData?.lineData} />
            <StockNews newsData={stockData?.news} />
        </div>
    )
};