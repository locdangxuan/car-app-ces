import { GetDetailCar, GetCarByValue } from 'services/api/Api.GetDetailCar';
import utils from 'utils/utils';
import { PRODUCTS } from 'config/constants/Action.Types';
import { MESSAGE_ERROR } from 'config/messages/Messages.Post';

const onRequset = (type) => ({
    type,
});

const actFetchToProducts = (products) => {
    return {
        type: PRODUCTS.FETCH_LIST_POSTS_SUCCEED,
        products,
    };
};
const fetchProductsFailure = () => {
    return {
        type: PRODUCTS.FETCH_LIST_POSTS_FAILURE,
        message: MESSAGE_ERROR.FETCH_DATA_FAILURE,
    };
};
const actFetchToProductsSearch = (products, pagination, value) => {
    return {
        type: PRODUCTS.FETCH_LIST_POSTS_SEARCH_SUCCEED,
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
        dispatch(onRequset(PRODUCTS.REQUEST));
        setTimeout(async () => {
            try {
                const result = await GetDetailCar(token);
                return dispatch(actFetchToProducts(result.data.list));
            } catch (error) {
                dispatch(fetchProductsFailure(error));
            }
        }, 500);
    };
};

export const actRequestProductsSearch = (orderBy, value, page) => {
    let token = '';
    try {
        token = utils.getToken();
    } catch (error) {
        token = '';
    }
    return async (dispatch) => {
        dispatch(onRequset(PRODUCTS.REQUEST));
        setTimeout(async () => {
            try {
                const result = await GetCarByValue(token, orderBy, value, page);
                const { pagination, list } = result.data;
                pagination.orderBy = orderBy;
                pagination.value = value;
                return dispatch(
                    actFetchToProductsSearch(list, pagination, value)
                );
            } catch (error) {
                dispatch(fetchProductsFailure());
            }
        }, 500);
    };
};
