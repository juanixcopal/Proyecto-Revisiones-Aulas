import axios from "axios";

export default axios.create({
    baseURL: `http://172.27.18.13:4000/api`
})