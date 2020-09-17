import GetDetailCar from 'services/api/Api.GetDetailCar';
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
            const data = await GetDetailCar();
            return dispatch(actFetchToProducts(data.data.data.list));
        } catch (error) {
            dispatch(fetchProductsFailure());
        }
    };
};
