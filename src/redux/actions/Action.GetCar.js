import { GetDetailCar, GetCarByValue } from 'services/api/Api.GetDetailCar';
import utils from 'utils/utils';
import * as actionType from 'config/constants/Action.Types';

export const actFetchToProducts = (products) => {
    return {
        type: actionType.FETCH_DATA_TO_PRODUCT,
        products,
    };
};
export const fetchProductsFailure = () => {
    const nullProducts = {};
    return {
        type: actionType.FETCH_DATA_TO_PRODUCT_FAILURE,
        nullProducts,
    };
};
export const actFetchToProductsSearch = (products, pagination, value) => {
    return {
        type: actionType.FETCH_DATA_TO_PRODUCT_SEARCH,
        products,
        pagination,
        value,
    };
};

export const actRequestProducts = () => {
    let token = '';
    try {
        token = utils.getToken();
    } catch (error) {
        token = '';
    }
    return async (dispatch) => {
        try {
            const result = await GetDetailCar(token);
            return dispatch(actFetchToProducts(result.data.list));
        } catch (error) {
            dispatch(fetchProductsFailure());
        }
    };
};

export const actRequestProductsSearch = (value, page = 1) => {
    let token = '';
    try {
        token = utils.getToken();
    } catch (error) {
        token = '';
    }
    return async (dispatch) => {
        try {
            const result = await GetCarByValue(token, value, page);
            const { pagination, list } = result.data;
            pagination['value'] = value;
            const valueSearch = value;
            return dispatch(
                actFetchToProductsSearch(list, pagination, valueSearch)
            );
        } catch (error) {
            dispatch(fetchProductsFailure(error));
        }
    };
};
