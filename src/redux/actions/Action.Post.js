/* eslint-disable no-unused-vars */
import utils from 'utils/utils';
import { formUtilConstant } from 'config/constants/Utils';
import api from 'services/api/Api.Post';
import { loadLocationByCoor } from 'services/api/Api.Utils';
import { POSTS, MODELS, BRANDS } from 'config/constants/Action.Types';
import validator from 'services/validator/FieldsValidator';
import * as utilsConstants from 'config/constants/Utils';
import { MESSAGE_ERROR } from 'config/messages/Messages.Post';

const handleFieldsValidity = (invalidFields) => {
    const fieldsValidity = {
        name: true,
        distanceTraveled: true,
        price: true,
        brand: true,
        model: true,
        information: true,
    };
    const fieldsErrorMessage = {
        name: '',
        distanceTraveled: '',
        price: '',
        brand: '',
        model: '',
        information: '',
    };
    Object.values(invalidFields).forEach((value) => {
        const { name, message } = value;
        fieldsValidity[name] = false;
        fieldsErrorMessage[name] = message;
    });
    return { fieldsValidity, fieldsErrorMessage };
};

const onUploadSuccess = (payload) => ({
    type: POSTS.UPLOAD_SUCCEED,
    message: payload.message,
});
const onUploadFailure = (payload) => ({
    type: POSTS.UPLOAD_FAILED,
    message: payload.message,
    invalidFields: handleFieldsValidity(payload.invalidFields),
});
const onUpdateSuccess = (payload) => ({
    type: POSTS.UPDATE_SUCCEED,
    message: payload.message,
});
const onUpdateFailure = (payload) => ({
    type: POSTS.UPLOAD_FAILED,
    message: payload.message,
    invalidFields: handleFieldsValidity(payload.invalidFields),
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
const onLoadReviewsSuccess = (payload) => ({
    type: POSTS.REVIEWS.LOAD_REVIEWS_SUCCEED,
    reviewList: payload.list,
    pagination: payload.pagination,
});
const onLoadReviewFailure = () => ({
    type: POSTS.REVIEWS.LOAD_REVIEWS_FAILED,
    message: MESSAGE_ERROR.LOAD_REVIEWS_FAILURE,
});
const onCreateReviewsSuccess = (payload) => ({
    type: POSTS.REVIEWS.CREATE_REVIEW_SUCCEED,
    message: payload.message,
    data: payload.data,
});
const onCreateReviewsFailure = (error) => ({
    type: POSTS.REVIEWS.CREATE_REVIEW_FAILED,
    message: error.message,
});
const onDeleteReviewsSuccess = (payload) => ({
    type: POSTS.REVIEWS.DELETE_REVIEW_SUCCEED,
    message: payload.message,
    data: payload.data,
});
const onDeleteReviewsFailure = (error) => ({
    type: POSTS.REVIEWS.DELETE_REVIEW_FAILED,
    message: error.message,
});
const loadReviews = (id, page) => {
    let token = '';
    try {
        token = utils.getToken();
    } catch (error) {
        token = '';
    }
    return async (dispatch, getState) => {
        dispatch(onRequest(POSTS.REVIEWS.REQUEST));
        await setTimeout(async () => {
            try {
                const result = await api.loadReviews(id, page, token);
                dispatch(onLoadReviewsSuccess(result.data));
            } catch (error) {
                dispatch(onLoadReviewFailure());
            }
        }, utilsConstants.delayTime);
    };
};
const createReview = (id, content) => {
    return async (dispatch, getState) => {
        const currentReviewsList = getState().postReducer.reviewsList;
        dispatch(onRequest(POSTS.REVIEWS.REQUEST));
        await setTimeout(async () => {
            try {
                const token = utils.getToken();
                const response = await api.createReview(id, content, token);
                const result = response.data[0];
                currentReviewsList.unshift({
                    createdAt: result.createdAt,
                    name: result.content,
                    user: result.displayName,
                    id: result.id,
                    editable: true,
                });
                currentReviewsList.pop();
                dispatch(
                    onCreateReviewsSuccess({
                        message: response.message,
                        data: currentReviewsList,
                    })
                );
            } catch (error) {
                dispatch(onCreateReviewsFailure(JSON.parse(error.message)));
            }
        }, utilsConstants.delayTime);
    };
};
const deleteReview = (id, postId) => {
    return async (dispatch, getState) => {
        dispatch(onRequest(POSTS.REVIEWS.REQUEST));
        await setTimeout(async () => {
            try {
                const token = utils.getToken();
                await api.deleteReview(id, token);
                const response = await api.loadReviews(postId, 1, token);
                dispatch(onDeleteReviewsSuccess(response));
            } catch (error) {
                dispatch(onDeleteReviewsFailure(JSON.parse(error.message)));
            }
        }, utilsConstants.delayTime);
    };
};
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

const validateFields = async (payload, getState, type = 'upload') => {
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
            images,
        } = payload;
        const brandId = await utils.getIdFromArray(
            getState().postReducer.brands,
            brand
        );
        const modelId = await utils.getIdFromArray(
            getState().postReducer.models,
            model
        );
        validator.postValidator(
            {
                brand: brandId,
                distanceTraveled,
                location,
                fuelType,
                information,
                model: modelId,
                name,
                price,
                year,
                images,
            },
            type
        );
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
                newInformation[formUtilConstant.otherFeatures] =
                    payload.information;
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
        }, utilsConstants.delayTime);
    };
};

const update = (payload) => {
    return async (dispatch, getState) => {
        dispatch(onRequest(POSTS.REQUEST));
        setTimeout(async () => {
            try {
                const validateResult = await validateFields(
                    payload,
                    getState,
                    'update'
                );
                const newInformation = {};
                newInformation[formUtilConstant.otherFeatures] =
                    payload.information;
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
        }, utilsConstants.delayTime);
    };
};

const fetchPostData = (id) => {
    let token = '';
    try {
        token = utils.getToken();
    } catch (error) {
        token = '';
    }
    return async (dispatch, getState) => {
        dispatch(onRequest(POSTS.REQUEST));
        try {
            const result = await api.fetch(id, token);
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
    loadReviews,
    createReview,
    deleteReview,
};
