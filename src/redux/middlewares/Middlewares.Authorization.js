/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import Cookies from 'universal-cookie';
import * as rad from 'redux-allow-deny';
import {
    LOGIN,
    REGISTER,
    UPDATE_FIELD_AUTH,
} from 'config/constants/Action.Types';

const checkToken = (store) => (next) => (action) => {
    const cookie = new Cookies();
    const token = cookie.get('token');
    if (token !== undefined && token !== null) next(action);
};

const verifyToken = rad.denylist(
    [
        LOGIN.REQUEST,
        LOGIN.SUCCESS,
        LOGIN.ERROR,
        REGISTER.REQUEST,
        REGISTER.SUCCESS,
        REGISTER.ERROR,
        UPDATE_FIELD_AUTH,
    ],
    checkToken
);

export { verifyToken };
