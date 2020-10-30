/* eslint-disable no-undef */
/* eslint-disable no-shadow */
import Cookies from 'universal-cookie';
import * as statusCode from 'config/constants/StatusCode';
import { MESSAGE_ERROR } from 'config/messages/Messages.Auth';
import * as utilsConstants from 'config/constants/Utils';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import locationIcon from 'assets/images/location.png';
import postAction from 'redux/actions/Action.Post';
import * as productAction from 'redux/actions/Action.GetCar';
import get from 'lodash.get';

const LocationIcon = L.Icon.extend({
    options: {
        iconSize: [38, 45],
        iconAnchor: [20, 40],
        popupAnchor: [-3, -76],
    },
});
const selfLocation = new LocationIcon({ iconUrl: locationIcon });

const marketInit = (latlng) => {
    return new L.Marker([latlng.lat, latlng.lng], {
        icon: selfLocation,
    });
};

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
        return '';
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
        const token = cookie.get(utilsConstants.token);
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
const reloadProfile = (newProfile) => {
    try {
        const profile = localStorage.getItem(utilsConstants.profile)
            ? JSON.parse(localStorage.getItem(utilsConstants.profile))
            : '';
        const { id } = profile;
        localStorage.setItem(
            utilsConstants.profile,
            JSON.stringify({
                id,
                phone: newProfile.phoneNumber,
                email: newProfile.email,
                displayName: newProfile.displayName,
                username: newProfile.name,
            })
        );
    } catch (error) {
        throw new Error(error);
    }
};

const getProfile = () => {
    try {
        const profile = localStorage.getItem(utilsConstants.profile)
            ? JSON.parse(localStorage.getItem(utilsConstants.profile))
            : '';
        return profile;
    } catch (error) {
        throw new Error(error);
    }
};

const classifyPath = (id) => {
    const path = get(window, 'location.pathname');
    if (path.includes(get(utilsConstants, 'path.createPost')) === true)
        return get(utilsConstants, 'pathKeyCode.createPost');
    if (path.includes(get(utilsConstants, 'path.postDetail')(id)) === true)
        return get(utilsConstants, 'pathKeyCode.postDetail');
    if (path.includes(get(utilsConstants, 'path.homepage')) === true)
        return get(utilsConstants, 'pathKeyCode.homepage');
};

const reloadComponents = (dispatch) => {
    const id = get(window, 'location.pathname').split('posts/')[1];
    switch (classifyPath(id)) {
        case get(utilsConstants, 'pathKeyCode.postDetail'):
            dispatch(postAction.loadReviews(id, 1));
            dispatch(postAction.fetchPostData(id));
            break;
        case get(utilsConstants, 'pathKeyCode.homepage'):
            dispatch(productAction.actRequestProducts());
            break;
        default:
            break;
    }
};

const timestampZToDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US');
};

const getLocationString = (location) => JSON.parse(location).place;

const mapInit = (defaultLatLng, zoomRatio = 6) => {
    const map = L.map('map').setView(
        [defaultLatLng.lat, defaultLatLng.lng],
        zoomRatio
    );
    L.tileLayer(
        'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
        {
            maxZoom: 20,
            detectRetina: true,
            attribution:
                '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
        }
    ).addTo(map);
    return map;
};

export default {
    base64Converter,
    getYears,
    getIdFromArray,
    getNameListFromArray,
    getToken,
    getProfile,
    getLocationString,
    mapInit,
    marketInit,
    timestampZToDate,
    reloadComponents,
    reloadProfile,
};
