import 'dotenv/config';

const server = process.env.REACT_APP_API_SERVER || 'http://localhost:3002/api/';
const geocodeServer =
    'https://api.bigdatacloud.net/data/reverse-geocode-client';

const api = {
    user: {
        register: `${server}users/register`,
        login: `${server}users/login`,
    },
    post: {
        get: `${server}posts/`,
        create: {
            url: `${server}posts/`,
            method: 'POST',
        },
        update: {
            url: `${server}posts/`,
            method: 'PUT',
        },
        delete: {
            url: `${server}posts/`,
            method: 'DELETE',
        },
    },
    brands: {
        get: `${server}brands/`,
    },
    models: {
        get: `${server}models/`,
    },
    geocode: {
        get: geocodeServer,
    },
    reviews: {
        get: `${server}reviews/post/`,
        create: {
            url: `${server}reviews/`,
            method: 'POST',
        },
        delete: {
            url: `${server}reviews/`,
            method: 'DELETE',
        },
    },
};

export default api;
