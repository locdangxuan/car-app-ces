import { PRODUCTS } from 'config/constants/Action.Types';

const initState = {
    products: [],
    pagination: {},
    pending: false,
};

const contentCarReducer = (state = initState, action) => {
    switch (action.type) {
        case PRODUCTS.REQUEST:
            return {
                ...state,
                pending: true,
            };
        case PRODUCTS.FETCH_LIST_POSTS_SUCCEED:
            return {
                ...state,
                products: action.products,
                pagination: {},
                pending: false,
            };
        case PRODUCTS.FETCH_LIST_POSTS_FAILURE:
            return {
                ...state,
                pending: false,
                message: action.message,
            };
        case PRODUCTS.FETCH_LIST_POSTS_SEARCH_SUCCEED:
        case PRODUCTS.FETCH_LIST_POSTS_BY_USER:
            return {
                ...state,
                products: action.products,
                pagination: action.pagination,
                pending: false,
            };
        default:
            return { ...state };
    }
};
export default contentCarReducer;
