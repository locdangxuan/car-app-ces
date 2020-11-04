import api from 'config/Servers';
import axios from 'axios';
import get from 'lodash.get';
import apiUtils from 'utils/utils.Api';
import utils from 'utils/utils';

const fetchUserData = async (token) => {
    try {
        const result = await axios({
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: get(api, 'user.fetch.method'),
            url: get(api, 'user.fetch.url'),
        });
        return result.data;
    } catch (error) {
        apiUtils.authApiErrorHandler(error);
    }
};
const updateProfile = async (payload, token) => {
    try {
        const result = await axios({
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: get(api, 'user.update.method'),
            url: get(api, 'user.update.url'),
            data: {
                username: payload.name,
                email: payload.email,
                phone: payload.phone,
                displayName: payload.displayName,
                password: payload.newPassword
                    ? payload.newPassword
                    : payload.password,
                oldPassword: payload.password,
            },
        });
        utils.reloadProfile(payload);
        return result.data;
    } catch (error) {
        apiUtils.authApiErrorHandler(error);
    }
};
export default { fetchUserData, updateProfile };
