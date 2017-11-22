import { combineReducers } from 'redux';
import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes';

const orders = (state = [], action) => {
    switch (action.type) {
        case CREATE_ORDER:
            const { payload } = action;
            return [...state, payload];
        case MOVE_ORDER_TO_FARM:
            const { id } = action.payload;
            return state.filter(order => order.id !== id);
        default:
            return state;
    }
};

export default combineReducers({
    orders
});

export const getMarketOrders = state => state.market.orders;
