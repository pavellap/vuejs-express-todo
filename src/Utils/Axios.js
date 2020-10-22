import Axios from "axios";
import {API_URL} from "@/config";

const AxiosInstance = Axios.create({
    baseURL: API_URL
})

export default AxiosInstance
