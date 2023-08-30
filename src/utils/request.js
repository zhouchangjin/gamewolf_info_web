import axios from 'axios'

const gameinfo_service_url="http://127.0.0.1:8099/gameinfo";


const gameinfo_service=axios.create({
    baseURL:gameinfo_service_url,
    timeout:10000
});

export default gameinfo_service