import axios from 'axios'

const AxiosInstance = axios.create({
        baseURL: process.env.REACT_APP_BASE_API,
        headers:[{'Content-Type':'application/json'}]
    }
)

export default AxiosInstance