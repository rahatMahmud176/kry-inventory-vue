import axios from "axios";

const myBaseUrl = "http://127.0.0.1:8000/api/"

export const axiosPublic = axios.create({
    baseURL : myBaseUrl,
    timeout : 60000
});
export const axiosPrivet = axios.create({
    baseURL : myBaseUrl,
    timeout : 60000
});

export const setAxiosPrivetHeaders = ()=> {
   axiosPrivet.defaults.headers.common['Authorization'] = localStorage.getItem('accessToken');
}       