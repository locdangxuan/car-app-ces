/* eslint-disable no-unused-vars */
import utils from 'utils/utils';
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
const onUpdateRequest = () => {};
const onUpdateSuccess = () => {};
const onUpdateFailure = () => {};
const onRequest = (type) => ({
    type,
});
const onLoadModelSuccess = (payload) => ({
    type: MODELS.LOAD_MODEL_SUCCEED,
    models: payload,
});
const onLoadModelFailure = (error) => ({
    type: MODELS.LOAD_MODEL_FAILED,
    message: error.message,
});
const onLoadBrandSuccess = (payload) => ({
    type: BRANDS.LOAD_BRAND_SUCCEED,
    brands: payload,
});
const onLoadBrandFailure = () => ({
    type: BRANDS.LOAD_BRAND_FAILED,
    message: MESSAGE_ERROR.LOAD_BRANDS_FAILURE,
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
                newInformation['Other Features'] = information.split(',');
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
            dispatch(onLoadModelFailure(JSON.parse(error.message)));
        }
    };
};

export default { upload, loadModels, loadBrands };
