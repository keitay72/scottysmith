import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getLineDataByList } from '../../store/stockData';
import { getStockInfo } from '../../store/stockData';
import Stockchart from '../Charts';
import StockInfo from './StockInfo';
import { useEffect } from 'react';

export default function StockDetailPage() {
    const { symbol } = useParams();
    const dispatch = useDispatch();
    const { [symbol]: stockData } = useSelector((state) => state.stockData.stocks);

    useEffect(async () => {
        await dispatch(getLineDataByList([symbol]));
        await dispatch(getStockInfo(symbol));
    }, [dispatch, symbol])
    return (
        <div>
            <h1>{symbol}</h1>
            {/* <StockChart symbol={symbol} /> */}
            <StockInfo info={stockData?.info} />
            <Stockchart lineData={stockData?.lineData} />
        </div>
    )
};