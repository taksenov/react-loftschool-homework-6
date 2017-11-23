import { combineReducers } from 'redux';
import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';

const deliveryExpanse = (state = 0, action) => {
    switch (action.type) {
        case MOVE_ORDER_TO_CUSTOMER:
            return state + 20;
        default:
            return state;
    }
};

const profit = (state = 0, action) => {
    switch (action.type) {
        case CREATE_ORDER:
            return state + action.payload.price;
        default:
            return state;
    }
};

const marketExpanse = (state = 0, action) => {
    switch (action.type) {
        case CREATE_ORDER:
            return state + 20;
        default:
            return state;
    }
};

const farmExpanse = (state = 0, action) => {
    switch (action.type) {
        case MOVE_ORDER_TO_FARM:
            return state + 100;
        default:
            return state;
    }
};

export default combineReducers({
    deliveryExpanse,
    profit,
    farmExpanse,
    marketExpanse
});

export const getBudget = state => state.budget;
