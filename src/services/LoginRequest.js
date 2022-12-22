import axios from "axios";
import {sendApiPostRequest} from "./ApiRequests";

function login  (props){
    let res;
    sendApiPostRequest("http://localhost:8989/log-in", {userName:props.userName, password: props.password},
        (response) => {
        res =response.data
    })
        if(res.success){
          return true;
        }
        else {
            if (res.errorCode==1 ){
            alert("The  password isn't correct");
            }
            else{
                alert("The  username isn't correct");
            }
            return false;
        }

    }
    export default login;

/*export const login(props) = (callback) => {
    axios.get("http://localhost:8989/log-in")
        .then(response => {
            if (callback) {
                callback(response);
            }
        })
}*/

