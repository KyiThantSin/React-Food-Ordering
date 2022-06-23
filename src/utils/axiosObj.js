import axios from 'axios';

const axiosObj = axios.create({
    baseURL:`https://food-order-v0.herokuapp.com/menu/api`,
    headers:{
        'Content-type': 'application/json',
    }
})

export default axiosObj;