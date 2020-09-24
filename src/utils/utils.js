/* eslint-disable no-shadow */
import Cookies from 'universal-cookie';
import * as statusCode from 'config/constants/StatusCode';
import { MESSAGE_ERROR } from 'config/messages/Messages.Auth';
import * as utilsConstant from 'config/constants/Utils';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import locationIcon from 'assets/images/location.png';

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
        const profile = localStorage.getItem(utilsConstant.profile)
            ? JSON.parse(localStorage.getItem(utilsConstant.profile))
            : '';
        return profile;
    } catch (error) {
        throw new Error(error);
    }
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
};
