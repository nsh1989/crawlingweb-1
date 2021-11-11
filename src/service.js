import axios from 'axios';

const BOARD_API_BASE_URL = "http://localhost:8080/api"

class service {
    getBoards() {
        console.log(axios.get('/api'));
        return axios.get('/api');
    }
}
export default new service();