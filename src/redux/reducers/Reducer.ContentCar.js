// eslint-disable-line no-param-reassign
/* eslint no-param-reassign: "error" */
/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["$scope"] }] */

import * as actionType from 'config/constants/Action.Types';

const initProduct = [[], {}];
const Contents = (state = initProduct, action) => {
    switch (action.type) {
        case actionType.FETCH_DATA_TO_PRODUCT:
            return [action.products, {}];
        case actionType.FETCH_DATA_TO_PRODUCT_FAILURE:
            return [...action.nullProducts];
        case actionType.FETCH_DATA_TO_PRODUCT_SEARCH:
            return [action.products, action.pagination];
        default:
            return [...state];
    }
};
export default Contents;
