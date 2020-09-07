/* eslint-disable no-unused-vars */
import utils from 'utils/utils';

const onUploadRequest = () => {};
const onUploadSuccess = () => {};
const onUploadFailure = () => {};
const onUpdateRequest = () => {};
const onUpdateSuccess = () => {};
const onUpdateFailure = () => {};
const onUpdateModelRequest = () => ({
    type: 'LOADING',
});

const onUpdateModelSuccess = (payload) => ({
    type: 'SUCCESS',
    models: payload,
});

const onUpdateModelFailure = (error) => ({
    type: 'FAILED',
    message: error.message,
});

const upload = () => {};
const updateFieldPost = (payload) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'UPDATE_FIELD_POST',
            key: payload.id,
            value: payload.value,
        });
    };
};

const uploadImagesPost = (payload) => {
    return async (dispatch, getState) => {
        const image = await utils.base64Converter(payload.files[0]);
        dispatch({
            type: 'UPLOAD_IMAGES_POST',
            file: image,
        });
    };
};

const updateBranch = (payload) => {
    return async (dispatch, getState) => {
        try {
            dispatch(onUpdateModelRequest);
            // call get list of model by branch api
            const models = await function api() {
                return [];
            };
            dispatch(onUpdateModelSuccess(models));
        } catch (error) {
            dispatch(onUpdateModelFailure(error));
        }
    };
};

export default { updateFieldPost, uploadImagesPost, updateBranch };
