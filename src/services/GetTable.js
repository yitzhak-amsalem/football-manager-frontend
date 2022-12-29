import axios from "axios";

export const getLeagueTable = (callback) => {
    axios.get("http://localhost:8989/get-league-table")
        .then(response => {
            if (callback) {
                callback(response);
            }
        })
}
export const getLeagueTableLive = (callback) => {
    axios.get("http://localhost:8989/get-league-table-live")
        .then(response => {
            if (callback) {
                callback(response);
            }
        })
}
