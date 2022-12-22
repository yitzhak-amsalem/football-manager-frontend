import React, {useCallback, useEffect, useState} from "react";
import CreateLiveGame from "./CreateLiveGame";
import {sendApiGetRequest, sendApiPostRequest} from "../services/ApiRequests";
import "../css/logIn.css";



function UserControl(props){
    const [isActive,setIsActive] = useState(true);
    const updateIsActive=()=>{
        /*setIsActive(prevState =>  {login(props={userName,password})})*/
        sendApiPostRequest("http://localhost:8989/log-in", {username:userName, password:password}, (response) => {

            if(response.data.success){
                setIsActive(true);
            }
            else {
                if (response.data.errorCode === 1){
                    alert("The  password isn't correct");
                }
                else{
                    alert("The  username isn't correct");
                }
                setIsActive(false);
            }

        })
    }

    const [userName,setUserName]=useState("");
    const updateUserName = (e) => {
        setUserName( prevState => e.target.value);
    }
    const [password,setPassword]=useState("");
    const updatePassword = (e) => {
        setPassword( prevState => e.target.value);
    }
    const logOut=()=>{
        setIsActive(false);
    }



        return (
            <div>
                {isActive ?
                    <div>
                    <CreateLiveGame  />
                    <button onClick={logOut}>log out</button>
                    </div>
                    :
                    <div>
                    <table>
                        <tr>
                            <td>
                                <input onChange={updateUserName} placeholder={"Enter your username"}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input onChange={updatePassword} placeholder={"Enter your password"}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button disabled={userName.length==0 || password.length==0} onClick={updateIsActive}>Sign In</button>
                            </td>
                        </tr>
                    </table>

                    </div>
                }
            </div>

        )

}


export default UserControl;