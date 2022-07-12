import axios from 'axios';

const AXIOS = axios.create({
    baseUrl: 'https://movie-app-phimmoi.herokuapp.com',
    timeout: 100000,
    headers: { 'Content-Type': 'application/json' }
})