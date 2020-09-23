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
        await setTimeout(async () => {
            try {
                const data = await GetDetailCar(token);
                return dispatch(actFetchToProducts(data.data.data.data.list));
            } catch (error) {
                dispatch(fetchProductsFailure(error));
            }
        }, 2000);
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
        dispatch(onRequset(PRODUCTS.REQUEST));
        await setTimeout(async () => {
            try {
                const data = await GetCarByValue(token, value, page);
                const { pagination, list } = data.data.data.data;
                pagination['value'] = value;
                const valueSearch = value;
                return dispatch(
                    actFetchToProductsSearch(list, pagination, valueSearch)
                );
            } catch (error) {
                dispatch(fetchProductsFailure());
            }
        }, 2000);
    };
};
