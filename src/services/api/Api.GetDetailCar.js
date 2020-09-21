import axios from 'axios';
import api from 'config/Servers';

export default function GetDetailCar(token, data) {
    return axios({
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: 'GET',
        url: api.post.get,
        data,
    }).catch(function check(error) {
        throw new Error(JSON.stringify(error));
    });
};
export const GetCarByValue = (value, page = 1, data) => {
    return axios({
        method: 'GET',
        url: `${api.post.get}`,
        params: {
            order_by: 'search',
            value,
            page,
            limit: '6',
        },
        data,
    }).catch(function check(error) {
        throw new Error(JSON.stringify(error));
    });
};
