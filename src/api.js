import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:7750';

export async function login(data) {
     return await axios.post('/login', {
        email: data.email,
        password: data.pass
    })
}

export async function getTeams(uid) {
    return await axios.get(`/teams/${uid}`)
}

export async function getPlayers(tid) {
    return await axios.get(`/Players/${tid}`)
}

// export async function getOnePlayers(pid) {
//     return await axios.get(`/oneplayer/${pid}`)
// }

export async function addNewPlayer(data) {
    return await axios.post('/addnewplayers', {
        name: data.name,
        age: data.age,
        position: data.position,
        tid: data.tid
   })
}

export async function editplayer(data) {
    return await axios.patch(`/editplayerinfo/${data.pid}`, {
        name: data.name,
        age: data.age,
        position: data.position,
        tid: data.tid
    })
}

export async function deletePlayer(pid) {
    return await axios.delete(`/deleteplayer/${pid}`)
}

export async function getPositionList() {
    return await axios.get('/positions')
}