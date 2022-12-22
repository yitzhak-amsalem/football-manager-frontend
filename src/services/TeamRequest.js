import {sendApiGetRequest} from "./ApiRequests";


export const getAvailableTeams=(callback)=>{
    sendApiGetRequest("http://localhost:8989/get-available-groups",(response)=>{
         return response
    })
}