import 'dotenv/config';

const server =
    process.env.REACT_APP_API_SERVER || 'https://car-app-ces.tk/api/';

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
            url: `${server}posts/update`,
            method: 'PUT',
        },
    },
    branch: {
        get: `${server}brands/`,
    },
    model: {
        get: `${server}models/`,
    },
};

export default api;
