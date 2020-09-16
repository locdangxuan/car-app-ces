/* eslint-disable no-shadow */
import Cookies from 'universal-cookie';
import * as statusCode from 'config/constants/StatusCode';
import { MESSAGE_ERROR } from 'config/messages/Messages.Auth';
import * as utilsConstant from 'config/constants/Utils';

const base64Converter = (file) =>
    new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => resolve(fileReader.result);
        fileReader.onerror = (error) => reject(error);
    });

const getYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    let i = 1950;
    while (i <= currentYear) {
        years.push(i);
        i += 1;
    }
    return years;
};

const getIdFromArray = (array, name) => {
    try {
        const result = array.filter((element) => element.name === name);
        return result[0].id;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getNameListFromArray = (array) => {
    const nameList = [];
    Object.values(array).forEach((value) => {
        nameList.push(value.name);
    });
    return getNameListFromArray;
};

const getToken = () => {
    try {
        const cookie = new Cookies();
        const token = cookie.get(utilsConstant.token);
        if (!token) throw new Error('error');
        return token;
    } catch (error) {
        throw new Error(
            JSON.stringify({
                status: statusCode.UNAUTHORIZED,
                message: MESSAGE_ERROR.UNAUTHORIZED,
            })
        );
    }
};

const getProfile = () => {
    try {
        const profile = JSON.parse(localStorage.getItem(utilsConstant.profile));
        return profile;
    } catch (error) {
        throw new Error(error);
    }
};

export default {
    base64Converter,
    getYears,
    getIdFromArray,
    getNameListFromArray,
    getToken,
    getProfile,
};
