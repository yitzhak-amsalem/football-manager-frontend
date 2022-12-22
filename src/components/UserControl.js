import React, {useCallback, useEffect, useState} from "react";
import CreateLiveGame from "./CreateLiveGame";
import {sendApiGetRequest, sendApiPostRequest} from "../services/ApiRequests";
import "../css/logIn.css";
import {TextField} from "@mui/material";


function UserControl(props) {
    const [isActive, setIsActive] = useState(false);
    const [userName, setUserName] = useState("manager");
    const [password, setPassword] = useState("12345678");
    const [user, setUser] = useState({})

    const updateIsActive = () => {
        sendApiPostRequest("http://localhost:8989/login", {userName: userName, password: password}, (response) => {
            if (response.data.success) {
                setIsActive(true);
                setUser(response.data.user)
            } else {
                if (response.data.errorCode === 1) {
                    alert("The password isn't correct");
                } else {
                    alert("The username isn't correct");
                }
            }
        })
    }

    const updateUserName = (e) => {
        setUserName(e.target.value);
    }
    const updatePassword = (e) => {
        setPassword(e.target.value);
    }
    const logOut = () => {
        setIsActive(false);
    }

    return (
        <div>
            {
                isActive ?
                    <div>
                        <CreateLiveGame user={user}/>
                        <button id={"sign-out-button"} onClick={logOut}>Sign out</button>
                    </div>
                    :
                    <div className={"login-container"}>
                        <TextField
                            style={{margin: "5px", backgroundColor: "#bdf0f5"}}
                            id={"filled-basic"}
                            variant={"filled"}
                            label={"Enter your user name"}
                            value={userName}
                            onChange={updateUserName}
                            required
                        />
                        <TextField
                            style={{margin: "5px", backgroundColor: "#bdf0f5"}}
                            id="filled-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="filled"
                            value={password}
                            onChange={updatePassword}
                            required
                        />
                        <button id={"sign-in-button"} disabled={userName.length === 0 || password.length === 0}
                                onClick={updateIsActive}>Sign In
                        </button>
                    </div>
            }
        </div>

    )

}


export default UserControl;