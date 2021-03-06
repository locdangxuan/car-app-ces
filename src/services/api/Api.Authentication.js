import api from 'config/Servers';
import axios from 'axios';
import Cookies from 'universal-cookie';
import * as utilsConstants from 'config/constants/Utils';
import apiUtil from 'utils/utils.Api';

const cookies = new Cookies();

const register = async (fields) => {
    try {
        await axios.post(api.user.register, fields);
        const response = await axios.post(api.user.login, fields);
        const { data, status } = response;
        const { displayName, email, id, phone, token, message } = data.data;
        localStorage.setItem(
            utilsConstants.profile,
            JSON.stringify({ id, phone, email, displayName })
        );
        cookies.set(utilsConstants.token, token, { path: '/' });
        return { status, message };
    } catch (error) {
        apiUtil.authApiErrorHandler(error);
    }
};

const login = async (fields) => {
    try {
        const response = await axios.post(api.user.login, fields);
        const { data, status } = response;
        const {
            displayName,
            email,
            id,
            phone,
            token,
            message,
            username,
        } = data.data;
        localStorage.setItem(
            utilsConstants.profile,
            JSON.stringify({ id, phone, email, displayName, username })
        );
        cookies.set(utilsConstants.token, token, { path: '/' });
        return { status, message };
    } catch (error) {
        apiUtil.authApiErrorHandler(error);
    }
};

const logout = () => {
    localStorage.removeItem(utilsConstants.profile);
    cookies.remove(utilsConstants.token, { path: '/' });
};

export default { register, login, logout };
