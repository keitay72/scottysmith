const UPDATE_LIST = 'stock/UPDATE_LIST';
const GET_LINE_DATA = 'stock/GET_LINE_DATA';
const ADD_LINE_DATA = 'stock/ADD_LINE_DATA';
const ADD_NEWS = 'stock/ADD_NEWS';

const addLines = (symbol, lineData) => ({
    type: ADD_LINE_DATA,
    symbol,
    lineData,
});

const addNews = (symbol, news) => ({
    type: ADD_NEWS,
    symbol,
    news,
});

const updateList = list => ({
    type: UPDATE_LIST,
    list,
});

const loadLines = (symbol, lineData) => ({
    type: GET_LINE_DATA,
    symbol,
});

export const getStockNews = symbol => async dispatch => {
    const response = await fetch(`/api/news/${symbol}`);
    if (response.ok) {
        const news = await response.json();
        dispatch(addNews(symbol, news));
    }
};

export const getLineDataByList = list => async dispatch => {
    const symbols = list.join(',')
    const response = await fetch(`/api/charts/${symbols}`)
    if (response.ok) {
        const stocks = await response.json();
        const newList = stocks.map(stock => {
            const symbol = Object.keys(stock)[0];
            const { [symbol]: lineData } = stock;
            dispatch(addLines(symbol, lineData));
            return { symbol, lineData };
        })
        dispatch(updateList(newList));
    }
};

export const getStockInfo = symbol => async (dispatch, getState) => {
    const response = await fetch(`/api/info/${symbol}`);
    if (response.ok) {
        const info = await response.json();
        console.log(info);
    }
};

export const getLineDataBySymbol = symbol => async (dispatch, getState) => {
    const state = getState();
    console.log(state)
    const response = await fetch(`/api/charts/${symbol}`);
    if (response.ok) {
        const data = await response.json();
        dispatch(addLines(symbol, data));
    }
};

const initialState = {
    stocks: {},
    watchlist: [],
};

const stockReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LINE_DATA: {
            return {
                ...state,
                stocks: {
                    ...state.stocks,
                    [action.symbol]: {
                        ...state.stocks[action.symbol],
                        lineData: action.lineData,
                        time: Date.now(),
                    },
                },
            }
        }
        case UPDATE_LIST: {
            return {
                ...state,
                watchlist: action.list,
            }
        }
        case ADD_NEWS: {
            return {
                ...state,
                stocks: {
                    ...state.stocks,
                    [action.symbol]: {
                        ...state.stocks[action.symbol],
                        news: action.news
                    }
                }
            }
        }
        default:
            return state;
    }
};

export default stockReducer;