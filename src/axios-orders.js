import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerapp-9ee1f.firebaseio.com/'
});

export default instance;