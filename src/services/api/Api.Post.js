/* eslint-disable no-console */
import api from 'config/Servers';
import axios from 'axios';
import apiUtils from 'utils/utils.Api';

const loadBrands = async () => {
    try {
        const result = await axios.get(api.branch.get);
        return result.data;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
};

const loadModel = async (brand) => {
    try {
        const result = await axios.get(api.model.get, {
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
        console.log(error.response);
        const { status, data } = error.response;
        const { message } = data;
        throw new Error(JSON.stringify({ status, message }));
    }
};
export default { loadBrands, loadModel, create };
