import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, */*',
        common: {
            'Authorization': `Bearer ${Cookies.get('token')}`,
        }
    },
})