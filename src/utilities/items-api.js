import sendRequest from './send-request';

const BASE_URL = '/api/items';


export function getAll() {
    console.log('items-api')
    return sendRequest(BASE_URL);
    }


export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
    }