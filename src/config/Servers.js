import 'dotenv/config';

const server = process.env.REACT_APP_API_SERVER || 'http://localhost:3002/api/';

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
    },
    brands: {
        get: `${server}brands/`,
    },
    models: {
        get: `${server}models/`,
    },
};

export default api;
