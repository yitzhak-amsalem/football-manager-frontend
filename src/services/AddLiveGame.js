import axios from "axios";

export const addLiveGame = (params, callback) => {
    axios.get("http://localhost:8989/save-game",
        {
            params: {
                group1Name: params.group1Name,
                group2Name: params.group2Name,
                user: params.user
            }
        })
        .then(response => {
            if (callback) {
                callback(response);
            }
        })
}