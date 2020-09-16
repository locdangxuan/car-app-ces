/* eslint-disable no-unused-vars */
import utils from 'utils/utils';
import { formUtilConstant } from 'config/constants/Utils';
import api from 'services/api/Api.Post';
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
const onLoadModelFailure = () => ({
    type: MODELS.LOAD_MODEL_FAILED,
    message: MESSAGE_ERROR.LOAD_MODELS_FAILURE,
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

const upload = (payload) => {
    return async (dispatch, getState) => {
        dispatch(onRequest(POSTS.REQUEST));
        await setTimeout(async () => {
            try {
                validator.postValidator(payload);
                const { brand, model, information } = payload;
                const brandId = await utils.getIdFromArray(
                    getState().postReducer.brands,
                    brand
                );
                const modelId = await utils.getIdFromArray(
                    getState().postReducer.models,
                    model
                );
                const newInformation = {};
                newInformation[
                    formUtilConstant.otherFeatures
                ] = information.split(',');
                const token = utils.getToken();
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
        await setTimeout(async () => {
            try {
                const {
                    brand,
                    distanceTraveled,
                    fuelType,
                    information,
                    model,
                    name,
                    price,
                    year,
                } = payload;
                validator.postValidator({
                    brand,
                    distanceTraveled,
                    fuelType,
                    information,
                    model,
                    name,
                    price,
                    year,
                });
                const brandId = await utils.getIdFromArray(
                    getState().postReducer.brands,
                    brand
                );
                const modelId = await utils.getIdFromArray(
                    getState().postReducer.models,
                    model
                );
                const newInformation = {};
                newInformation[
                    formUtilConstant.otherFeatures
                ] = information.split(',');
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

const cancel = () => {
    return (dispatch, getState) => {
        dispatch({
            type: POSTS.CANCEL,
        });
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
            dispatch(onLoadModelSuccess(models.data));
        } catch (error) {
            dispatch(onLoadModelFailure());
        }
    };
};

export default {
    upload,
    loadModels,
    loadBrands,
    update,
    cancel,
    fetchPostData,
};
