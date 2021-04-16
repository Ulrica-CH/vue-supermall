import axios from 'axios'
export function request(config) {
    //创建axios实例
    const axiosInstance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 4000
    })

    // axiosInstance.interceptors.request.use(config => {

    //     return config
    // }, err => {
    //     console.log(err);
    // })


    // axiosInstance.interceptors.response.use(response => {

    //     return response
    // }, err => {
    //     console.log(err);
    // })

    return axiosInstance(config)

}