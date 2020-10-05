import * as statusCode from 'config/constants/StatusCode';
import { MESSAGE_ERROR } from 'config/messages/Messages.Auth';

const getFormDataForPost = (payload) => {
    const data = new FormData();
    data.append('idModel', payload.model);
    data.append('name', payload.name);
    data.append('year', payload.year);
    data.append('fuelType', payload.fuelType);
    data.append('distanceTraveled', payload.distanceTraveled);
    data.append('price', payload.price);
    data.append('information', payload.information);
    data.append('location', payload.location);
    Object.values(payload.images).forEach((value) => {
        data.append('images', value);
    });
    if (payload.oldImageMap) {
        data.append('oldImagesMap', payload.oldImageMap);
    }
    if (payload.imgUrls) {
        data.append('imgUrls', JSON.stringify(payload.imgUrls));
    }
    return data;
};

const authApiErrorHandler = (error) => {
    if (error.message === 'Network Error') {
        const { message } = error;
        throw new Error(JSON.stringify({ message }));
    } else {
        const { status, data } = error.response;
        const { message } = data;
        throw new Error(JSON.stringify({ status, message }));
    }
};

const apiErrorHandler = (error) => {
    if (error.message === 'Network Error') {
        const { message } = error;
        throw new Error(JSON.stringify({ message }));
    } else {
        const { status, data } = error.response;
        if (status === statusCode.UNAUTHORIZED)
            throw new Error(
                JSON.stringify({
                    status,
                    message: MESSAGE_ERROR.UNAUTHORIZED,
                })
            );
        else {
            const { message } = data;
            throw new Error(JSON.stringify({ status, message }));
        }
    }
};

export default { getFormDataForPost, apiErrorHandler, authApiErrorHandler };
