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

const GetCarByValue = async (token, orderBy, value, page) => {
    const keyword = `${value.brand} ${value.valueSearch}`;
    try {
        const results = await axios({
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: 'GET',
            url: `${api.post.get}`,
            params: {
                order_by: orderBy,
                value: keyword,
                page,
                limit: '6',
                year:
                    value.year[0] && value.year[1]
                        ? `${value.year[0]},${value.year[1]}`
                        : '',
                price:
                    value.price[0] && value.price[1]
                        ? `${value.price[0]},${value.price[1]}`
                        : '',
            },
        });
        return results.data;
    } catch (error) {
        apiUtil.apiErrorHandler(error);
    }
};

export { GetDetailCar, GetCarByValue };
