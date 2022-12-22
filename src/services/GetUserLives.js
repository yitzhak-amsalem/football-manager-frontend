import axios from "axios";

export const getUserLives = (params, callback) => {
    axios.get("http://localhost:8989/get-live-games-per-user",
        {
            params: {
                token: params
            }
        })
        .then(response => {
            if (callback) {
                callback(response);
            }
        })
}