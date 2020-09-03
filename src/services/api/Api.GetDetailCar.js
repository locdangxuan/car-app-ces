import axios from 'axios';
import api from 'config/Servers'
export default function GetDetailCar(data) {
    return axios({
        method: 'GET',
        url: api.post.get,
        data,
    }).catch(function check(error) {
        throw new Error(JSON.stringify(error))
    });
}
