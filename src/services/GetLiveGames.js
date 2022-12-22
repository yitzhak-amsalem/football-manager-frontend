import axios from "axios";


export const getLiveGames = (callback) => {
    axios.get("http://localhost:8989/get-live-games")
        .then(response => {
            if (callback) {
                callback(response);
            }
        })
}
export const getAvailableTeams = (callback) => {
    axios.get("http://localhost:8989/get-Available-Teams")
        .then(response => {
            if (callback) {
                callback(response);
            }
        })
}

