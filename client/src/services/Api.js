import axios from 'axios'

//adica zaloaga de server
export default () => {
    return axios.create({
        baseURL: `http://localhost:8081/`
    })
}
