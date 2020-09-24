import axios from 'axios';
import api from 'config/Servers';
import apiUtil from 'utils/utils.Api';

const GetDetailCar = async (token) => {
    try {
        const result = await axios({
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: 'GET',
            url: api.post.get,
        });
        return result.data;
    } catch (error) {
        apiUtil.apiErrorHandler(error);
    }
};
const GetCarByValue = async (token, value, page = 1) => {
    try {
        const results = await axios({
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: 'GET',
            url: `${api.post.get}`,
            params: {
                order_by: 'search',
                value,
                page,
                limit: '6',
            },
        });
        return results.data;
    } catch (error) {
        apiUtil.apiErrorHandler(error);
    }
};

export { GetDetailCar, GetCarByValue };
