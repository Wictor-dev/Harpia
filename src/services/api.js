import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://harpia-inc-api.herokuapp.com'
})

