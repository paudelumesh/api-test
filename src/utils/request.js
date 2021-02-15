require('dotenv').config();
const axios = require('axios').default;
const token = process.env.AUTHORIZATION_TOKEN;

var axiosInstance = axios.create({
    baseURL: 'https://dictionary.iachieved.it',
    headers: {
        'Authorization': `Basic ${token}`,
        'Content-Type': 'application/json'
    }
});

module.exports = axiosInstance;