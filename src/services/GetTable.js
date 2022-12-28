import axios from "axios";

export const getLeagueTable = (params, callback) => {
    axios.post("http://localhost:8989/get-league-table",
        null, {
            params: {
                withLive: params
            }
        })
        .then(response => {
            if (callback) {
                callback(response);
            }
        })
}
