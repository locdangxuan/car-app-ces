/* eslint-disable import/prefer-default-export */
import api from 'config/Servers';
import axios from 'axios';

const loadLocationByCoor = async (lat, lng) => {
    try {
        const response = await axios.get(api.geocode.get, {
            params: {
                latitude: lat,
                longitude: lng,
                localityLanguage: 'en',
            },
        });
        const { principalSubdivision, countryName } = response.data;
        return `${principalSubdivision},${countryName}`;
    } catch (error) {
        return '';
    }
};
export { loadLocationByCoor };
