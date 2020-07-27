import * as actionType from 'config/constants/Action.Types';

const initProduct = [];
const Contents = (state = initProduct, action) => {
    switch (action.type) {
        case actionType.FETCH_DATA_TO_PRODUCT:
            return [...action.products];
        case actionType.FETCH_DATA_TO_PRODUCT_FAILURE:
            return [...action.message]
        default:
            return [...state];
    }
};
export default Contents;
