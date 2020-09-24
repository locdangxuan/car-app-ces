import * as actionType from 'config/constants/Action.Types';

const initState = {
    products: [],
    pagination: {},
    pending: false,
};

const contentCarReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.FETCH_DATA_TO_PRODUCT:
            return {
                products: action.products,
                pagination: {},
                pending: false,
            };
        case actionType.FETCH_DATA_TO_PRODUCT_FAILURE:
            return {
                ...action.nullProducts,
            };
        case actionType.FETCH_DATA_TO_PRODUCT_SEARCH:
            return {
                products: action.products,
                pagination: action.pagination,
                pending: false,
            };
        default:
            return { ...state };
    }
};
export default contentCarReducer;
