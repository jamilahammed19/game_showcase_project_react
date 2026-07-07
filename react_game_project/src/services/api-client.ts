import axios from "axios";

const apiClient =  axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'b7af337bae8e44a7a72a3b244d3e8a46'
    }
})

export default apiClient;