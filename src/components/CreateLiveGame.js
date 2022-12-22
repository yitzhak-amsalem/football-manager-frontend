import React, {useEffect} from "react";
import { useState } from "react";
import {sendApiGetRequest, sendApiPostRequest} from "../services/ApiRequests";



function CreateLiveGame(props){
const [group1,setGroup1]=useState("");
    const updateGroup1 = (e) => {
        setGroup1( prevState =>  e.target.value);
    }
    const [group2,setGroup2]=useState("");
    const updateGroup2 = (e) => {
        setGroup2( prevState =>  e.target.value);
    }
    const [table,setTable]=useState([""]);
 /*   const updateTable=(groupName)=>{
        let newTable=[];
        setTable(prevState => prevState.map((i)=>{
            if(!prevState[i].value.equal(groupName)){
                newTable.push(groupName);
            }
            return newTable;
        }) );
    }*/
    const [itBegan,setItBegan]=useState(false);
    const saveGame = () => {
       sendApiPostRequest("http://localhost:8989/save-game",{group1Name:group1,group2Name:group2},(response)=>{
        })
 setItBegan(true);
    }
    const [game,moreGame]=useState(false);
    const addGame=()=>{
        moreGame(true);
    }
    const [goalsGroupA,setGoalsGroupA]=useState(0);
    const [goalsGroupB,setGoalsGroupB]=useState(0);
    const updateGoalsGroupA=(e)=>{
        setGoalsGroupA(prevState => e.target.value);
        sendApiPostRequest("http://localhost:8989/update-goals",
            {groupAName:group1,groupBName:group2,goalsGroupA:goalsGroupA,goalsGroupB:goalsGroupB}
            ,(response)=>{
        })
    }
    const updateGoalsGroupB=(e)=>{
        setGoalsGroupB(prevState => e.target.value);
        sendApiPostRequest("http://localhost:8989/update-goals",
            {groupAName:group1,groupBName:group2,goalsGroupA:goalsGroupA,goalsGroupB:goalsGroupB}
            ,(response)=>{
            })
    }
    const [itFinish,setItFinish]=useState(false);
    const finishGame=()=>{
        setItFinish(true)
        sendApiPostRequest("http://localhost:8989/finish-game",{group1Name:group1,group2Name:group2},(response)=>{
        })
    }

     useEffect(()=> {
        sendApiGetRequest("http://localhost:8989/get-available-groups",(response)=>{
            let res=response.data;
            setTable(prevState => res);
            console.log(res);
        })
    },[])


    return(
        <div>
            {itBegan?
                <div>
                    {!itFinish &&
                        <div>
                        <label>{group1}</label>
                        <input onChange={updateGoalsGroupA} type="number" min="0" placeholder={"Enter the goals of group "+{group1}} value={goalsGroupA}/>
                        <label>{group2}</label>
                        <input onChange={updateGoalsGroupB} type="number" min="0" placeholder={"Enter the goals of group "+{group2}} value={goalsGroupB}/>
                        <button disabled={goalsGroupA==null||goalsGroupB==null} onClick={finishGame}>finish game</button>
                        <button disabled={game} onClick={addGame}>add game</button>
                        </div>}

                    {
                        game &&
                        <CreateLiveGame/>
                    }

                </div>
                :
                <div>
                <select  onChange={updateGroup1} value={group1}>
                    {
                        table.map(team => {
                            return (
                                <option placeholder="group1">{team}</option>
                            )

                        })
                    }
                </select>
                <select onChange={updateGroup2} value={group2} >
            {
                table.map(team =>{
                return(
                <option >{team}</option>
                )

            })


            }
                </select>

                <button  onClick={saveGame}>Save Game</button>
                </div>
            }

        </div>
    )
}
export default CreateLiveGame;