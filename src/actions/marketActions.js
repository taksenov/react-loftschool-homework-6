import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from './marketTypes';

export const createOrder = payload => ({
    type: CREATE_ORDER,
    payload
});

export const moveOrder = payload => ({
    type: MOVE_ORDER_TO_FARM,
    payload
});
