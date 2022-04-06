import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:7750/';

export async function login(data) {
     return await axios.post('login', {
        email: data.email,
        password: data.pass
    })
}

export async function getTeams(uid) {
    return await axios.get(`teams/${uid}`)
}


