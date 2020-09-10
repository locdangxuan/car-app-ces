import * as GetCar from 'services/api/Api.GetDetailCar';
import * as actionType from 'config/constants/Action.Types';

export const actFetchToProducts = (products) => {
    return {
        type: actionType.FETCH_DATA_TO_PRODUCT,
        products,
    };
};
export const fetchProductsFailure = () => {
    const nullProducts = [];
    return {
        type: actionType.FETCH_DATA_TO_PRODUCT_FAILURE,
        nullProducts,
    };
};
export const actRequestProducts = () => {
    return async (dispatch) => {
        try {
            const data = await GetCar.GetDetailCar();
            return dispatch(actFetchToProducts(data.data.data.list));
        } catch (error) {
            dispatch(fetchProductsFailure());
        }
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

export const actRequestProductsSearch = (value, page = 1) => {
    return async (dispatch) => {
        try {
            const data = await GetCar.GetCarByValue(value, page);
            const products = data.data.data.data;
            const { pagination } = data.data.data;
            pagination['value'] = value;
            const valueSearch = value;
            return dispatch(
                actFetchToProductsSearch(products, pagination, valueSearch)
            );
        } catch (error) {
            dispatch(fetchProductsFailure(error));
        }
    };
};
