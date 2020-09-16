import api from 'config/Servers';
import axios from 'axios';
import apiUtils from 'utils/utils.Api';

const loadBrands = async () => {
    try {
        const result = await axios.get(api.brands.get);
        return result.data;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
};

const loadModel = async (brand) => {
    try {
        const result = await axios.get(api.models.get, {
            params: {
                order_by: 'brand',
                value: brand,
            },
        });
        return result.data;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
};

const create = async (payload, token) => {
    try {
        const data = apiUtils.getFormDataForPost(payload);
        const result = await axios({
            headers: {
                'content-type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            },
            method: api.post.create.method,
            url: api.post.create.url,
            data,
        });
        return result.data;
    } catch (error) {
        const { status, data } = error.response;
        const { message } = data;
        throw new Error(JSON.stringify({ status, message }));
    }
};

const update = async (payload, token) => {
    try {
        const data = apiUtils.getFormDataForPost(payload);
        const result = await axios({
            headers: {
                'content-type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            },
            method: api.post.update.method,
            url: `${api.post.update.url}${payload.id}`,
            data,
        });
        return result.data;
    } catch (error) {
        const { status, data } = error.response;
        const { message } = data;
        throw new Error(JSON.stringify({ status, message }));
    }
};

const fetch = async (id) => {
    try {
        const result = await axios.get(`${api.post.get}${id}`);
        return result.data;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
};
export default { loadBrands, loadModel, create, fetch, update };
