/* eslint-disable no-unused-vars */
import api from 'services/api/Api.User';
import { USER } from 'config/constants/Action.Types';
import * as utilsConstants from 'config/constants/Utils';
import validator from 'services/validator/FieldsValidator';
import utils from 'utils/utils';
import { MESSAGE_SUCCESS } from 'config/messages/Messages.User';

const errorHandler = (payload) => {
    if (!payload.invalidFields) {
        return { message: payload.message };
    }
    const fieldsValidity = {
        name: true,
        displayName: true,
        phone: true,
        email: true,
        newPassword: true,
        password: true,
        verification: true,
    };
    const fieldsErrorMessage = {
        name: '',
        displayName: '',
        phone: '',
        email: '',
        newPassword: '',
        password: '',
        verification: '',
    };
    Object.values(payload.invalidFields).forEach((value) => {
        const { name, message } = value;
        fieldsValidity[name] = false;
        fieldsErrorMessage[name] = message;
    });
    return { message: payload.message, fieldsValidity, fieldsErrorMessage };
};
const onRequest = () => ({
    type: USER.REQUEST,
});
const onFetchDataSuccess = (payload) => ({
    type: USER.FETCH_DATA_SUCCEED,
    data: payload,
});
const onFetchDataFailure = (payload) => ({
    type: USER.FETCH_DATA_FAILED,
    message: payload.message,
});
const onUpdateProfileSuccess = (profile) => ({
    type: USER.UPDATE_PROFILE_SUCCEED,
    message: MESSAGE_SUCCESS.UPDATE_SUCCEED,
    profile,
});
const onUpdateProfileFailure = (payload) => ({
    type: USER.UPDATE_PROFILE_FAILED,
    message: payload.message,
    invalidFields: {
        fieldsValidity: payload.fieldsValidity,
        fieldsErrorMessage: payload.fieldsErrorMessage,
    },
});
const fetchUserData = () => async (dispatch) => {
    dispatch(onRequest());
    setTimeout(async () => {
        try {
            const result = localStorage.getItem(utilsConstants.profile);
            dispatch(onFetchDataSuccess(result));
        } catch (error) {
            dispatch(onFetchDataFailure(error.message));
        }
    }, utilsConstants.delayTime);
};
const updateProfile = (payload) => async (dispatch, getState) => {
    dispatch(onRequest());
    setTimeout(async () => {
        let { data } = getState().userReducer;
        data = JSON.parse(data);
        const newProfile = payload;
        try {
            Object.entries(newProfile).forEach((entry) => {
                const [key, value] = entry;
                if (value === undefined || value === '') {
                    if (key === 'newPassword' && value === '') {
                        // eslint-disable-next-line no-unused-expressions
                        newProfile['newPassword'] === '';
                    }
                    newProfile[key] = data[key];
                }
            });
            const isUpdatable = validator.profileValidator(newProfile, data);
            if (isUpdatable) {
                const token = utils.getToken();
                await api.updateProfile(newProfile, token);
                dispatch(onUpdateProfileSuccess(JSON.stringify(newProfile)));
            } else {
                dispatch(onUpdateProfileSuccess(JSON.stringify(data)));
            }
        } catch (error) {
            dispatch(
                onUpdateProfileFailure(errorHandler(JSON.parse(error.message)))
            );
        }
    }, utilsConstants.delayTime);
};
export default { fetchUserData, updateProfile };
