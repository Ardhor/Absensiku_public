import { AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";
import apiManager from "./apiManager";

export const GetClasses = (async () => {
    const config: AxiosRequestConfig ={
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        } as RawAxiosRequestHeaders,
    };
    try {
        const response: AxiosResponse = await apiManager.get('/classes?page=1', config)
        return response;
    } catch (error) {
        console.log("Gagal mengambil data", error)
    }
})();
    