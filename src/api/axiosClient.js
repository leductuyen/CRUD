import axios from "axios";

const axiosClient = axios.create({
    baseURL:'https://www.mecallapi.com/api/',
    headers:{
      Authorization: 'authorizationToken',
      Accept: 'application/form-data',
        'Content-Type' :'application/json'
    }
})


export default axiosClient