/* eslint-disable no-unused-vars */
import utils from 'utils/utils';
import { formUtilConstant } from 'config/constants/Utils';
import api from 'services/api/Api.Post';
import { loadLocationByCoor } from 'services/api/Api.Utils';
import { POSTS, MODELS, BRANDS } from 'config/constants/Action.Types';
import validator from 'services/validator/FieldsValidator';
import { MESSAGE_ERROR } from 'config/messages/Messages.Post';

const onUploadSuccess = (payload) => ({
    type: POSTS.UPLOAD_SUCCEED,
    message: payload.message,
});
const onUploadFailure = (payload) => ({
    type: POSTS.UPLOAD_FAILED,
    message: payload.message,
});
const onUpdateSuccess = (payload) => ({
    type: POSTS.UPDATE_SUCCEED,
    message: payload.message,
});
const onUpdateFailure = (payload) => ({
    type: POSTS.UPLOAD_FAILED,
    message: payload.message,
});
const onRequest = (type) => ({
    type,
});
const onLoadModelSuccess = (payload) => ({
    type: MODELS.LOAD_MODEL_SUCCEED,
    models: payload,
});
const onLoadModelFailure = (message) => ({
    type: MODELS.LOAD_MODEL_FAILED,
    message: message || MESSAGE_ERROR.LOAD_MODELS_FAILURE,
});
const onLoadBrandSuccess = (payload) => ({
    type: BRANDS.LOAD_BRAND_SUCCEED,
    brands: payload,
});
const onLoadBrandFailure = () => ({
    type: BRANDS.LOAD_BRAND_FAILED,
    message: MESSAGE_ERROR.LOAD_BRANDS_FAILURE,
});
const onFetchPostSuccess = (data) => ({
    type: POSTS.FETCH_DATA_SUCCEED,
    data,
});
const onFetchPostFailure = () => ({
    type: POSTS.FETCH_DATA_FAILED,
    message: MESSAGE_ERROR.FETCH_DATA_FAILURE,
});
const dismissMessage = () => ({
    type: POSTS.DISMISS_MESSAGE,
});
const loadBrands = () => {
    return async (dispatch, getState) => {
        dispatch(onRequest(BRANDS.REQUEST));
        try {
            const result = await api.loadBrands();
            dispatch(onLoadBrandSuccess(result.data));
        } catch (error) {
            dispatch(onLoadBrandFailure());
        }
    };
};

const onLocationChange = (coordinates) => {
    return async (dispatch) => {
        const location = {
            place: '',
            coor: {
                lat: 0.0,
                lng: 0.0,
            },
        };
        try {
            const { lat, lng } = coordinates;
            const result = await loadLocationByCoor(lat, lng);
            location.place = result;
            location.coor.lat = lat;
            location.coor.lng = lng;
            dispatch({
                type: POSTS.LOCATION,
                location: JSON.stringify(location),
            });
        } catch (error) {
            dispatch({
                type: POSTS.LOCATION,
                location: '',
            });
        }
    };
};

const validateFields = async (payload, getState) => {
    try {
        const {
            brand,
            distanceTraveled,
            fuelType,
            information,
            model,
            location,
            name,
            price,
            year,
        } = payload;
        const brandId = await utils.getIdFromArray(
            getState().postReducer.brands,
            brand
        );
        const modelId = await utils.getIdFromArray(
            getState().postReducer.models,
            model
        );
        validator.postValidator({
            brand: brandId,
            distanceTraveled,
            location,
            fuelType,
            information,
            model: modelId,
            name,
            price,
            year,
        });
        return { brandId, modelId };
    } catch (error) {
        const { message } = error;
        throw new Error(message);
    }
};

const upload = (payload) => {
    return async (dispatch, getState) => {
        dispatch(onRequest(POSTS.REQUEST));
        setTimeout(async () => {
            try {
                const validateResult = await validateFields(payload, getState);
                const newInformation = {};
                newInformation[
                    formUtilConstant.otherFeatures
                ] = payload.information.split(',');
                const token = utils.getToken();
                const { brandId, modelId } = validateResult;
                const result = await api.create(
                    {
                        ...payload,
                        model: modelId,
                        brand: brandId,
                        information: JSON.stringify(newInformation),
                    },
                    token
                );
                dispatch(onUploadSuccess(result));
            } catch (error) {
                dispatch(onUploadFailure(JSON.parse(error.message)));
            }
        }, 2000);
    };
};

const update = (payload) => {
    return async (dispatch, getState) => {
        dispatch(onRequest(POSTS.REQUEST));
        setTimeout(async () => {
            try {
                const validateResult = await validateFields(payload, getState);
                const newInformation = {};
                newInformation[
                    formUtilConstant.otherFeatures
                ] = payload.information.split(',');
                Object.values(
                    newInformation[formUtilConstant.otherFeatures]
                ).forEach((value) => {
                    if (!value.trim()) {
                        newInformation[formUtilConstant.otherFeatures].pop(
                            value
                        );
                    }
                });
                const token = utils.getToken();
                const { brandId, modelId } = validateResult;
                const result = await api.update(
                    {
                        ...payload,
                        model: modelId,
                        brand: brandId,
                        information: JSON.stringify(newInformation),
                    },
                    token
                );
                dispatch(onUpdateSuccess(result));
            } catch (error) {
                dispatch(onUpdateFailure(JSON.parse(error.message)));
            }
        }, 2000);
    };
};

const fetchPostData = (id) => {
    return async (dispatch, getState) => {
        dispatch(onRequest(POSTS.REQUEST));
        try {
            const result = await api.fetch(id);
            dispatch(onFetchPostSuccess(result.data));
        } catch (error) {
            dispatch(onFetchPostFailure());
        }
    };
};

const loadModels = (payload) => {
    return async (dispatch, getState) => {
        dispatch(onRequest(MODELS.REQUEST));
        try {
            const brandId = await utils.getIdFromArray(
                payload.brands,
                payload.value
            );
            const models = await api.loadModel(brandId);
            if (models.data.length < 1)
                dispatch(onLoadModelFailure(MESSAGE_ERROR.EMPTY_MODELS));
            else dispatch(onLoadModelSuccess(models.data));
        } catch (error) {
            dispatch(onLoadModelFailure());
        }
    };
};

const cancel = () => {
    return (dispatch) => {
        dispatch({ type: POSTS.CANCEL });
    };
};

export default {
    upload,
    loadModels,
    loadBrands,
    update,
    cancel,
    fetchPostData,
    dismissMessage,
    onLocationChange,
};
