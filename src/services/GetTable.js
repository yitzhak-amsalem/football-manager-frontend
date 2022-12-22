import axios from "axios";

export const getLeagueTable = (params, callback) => {
    axios.get("http://localhost:8989/get-league-table",
        {
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
