import axios from 'axios';

export default function callAPI(url, method = 'GET', body) {
    return axios({
        method: method,
        url: url,
        data: body
    })
        .catch(err => {
            alert(err.data.errors)
        })
};