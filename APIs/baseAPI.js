import axios from 'axios'

export default axios.create({
    baseURL: 'http://penfriendseedigital.xyz/api',
    timeout: 15000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});