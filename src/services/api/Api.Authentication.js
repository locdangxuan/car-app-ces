import api from 'config/Servers';
import axios from 'axios';
import Cookies from 'universal-cookie';
import * as utilsConstants from 'config/constants/Utils';

const cookies = new Cookies();

const register = async (fields) => {
    try {
        const result = await axios.post(api.user.register, fields);
        return result.data;
    } catch (error) {
        const { status, data } = error.response;
        const { message } = data;
        throw new Error(JSON.stringify({ status, message }));
    }
};

const login = async (fields) => {
    try {
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
        const { status, data } = error.response;
        const { message } = data;
        throw new Error(JSON.stringify({ status, message }));
    }
};

const logout = () => {
    localStorage.clear();
    cookies.remove(utilsConstants.token, { path: '/' });
};

export default { register, login, logout };
