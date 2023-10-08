import axios from "axios";
//import Cookies from "js-cookie";

export const api = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, */*',
    },
})