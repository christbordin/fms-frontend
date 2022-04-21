import axios from "axios";

axios.defaults.baseURL = "http://localhost:7750";

export async function login(data) {
  return await axios
    .post("/login", {
      email: data.email,
      password: data.pass,
    })
    .then((user) => {
      if (user) {
        user.data.authData = window.btoa(user.data.name + ":" + user.data.pass);
        localStorage.setItem("user", JSON.stringify(user));
      }

      return user;
    });
}

export async function getTeams() {
  const user = JSON.parse(localStorage.getItem("user"));
  const uid = user.data.uid;
  return await axios.get(`/teams/${uid}`).then((teams) => {
    if (teams) {
      localStorage.setItem("teams", JSON.stringify(teams));
    }

    return teams;
  });
}

export async function getPlayers(tid) {
  return await axios.get(`/Players/${tid}`);
}

// export async function getOnePlayers(pid) {
//     return await axios.get(`/oneplayer/${pid}`)
// }

export async function addNewPlayer(data) {
  return await axios.post("/addnewplayers", {
    name: data.name,
    age: data.age,
    position: data.position,
    tid: data.tid,
  });
}

export async function editplayer(data) {
  return await axios.patch(`/editplayerinfo/${data.pid}`, {
    name: data.name,
    age: data.age,
    position: data.position,
    tid: data.tid,
  });
}

export async function deletePlayer(pid) {
  return await axios.delete(`/deleteplayer/${pid}`);
}

export async function getPositionList() {
  return await axios.get("/positions");
}
