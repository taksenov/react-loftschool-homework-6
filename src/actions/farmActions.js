import { MOVE_ORDER_TO_FARM } from './marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from './farmTypes';

export const moveOrderToCustomer = payload => ({
    type: MOVE_ORDER_TO_CUSTOMER,
    payload
});

export const moveOrderToFarm = payload => ({
    type: MOVE_ORDER_TO_FARM,
    payload
});
