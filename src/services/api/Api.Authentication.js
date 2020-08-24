import api from 'config/Servers';
import axios from 'axios';
import Cookies from 'universal-cookie';

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
        const { message, profile, token } = data;
        localStorage.setItem('Profile', profile);
        const cookies = new Cookies();
        cookies.set('token', token, { path: '/' });
        return { status, message };
    } catch (error) {
        const { status, data } = error.response;
        const { message } = data;
        throw new Error(JSON.stringify({ status, message }));
    }
};
export default { register, login };
