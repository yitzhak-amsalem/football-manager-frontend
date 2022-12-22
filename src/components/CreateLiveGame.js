import React, {useEffect} from "react";
import {useState} from "react";
import {sendApiGetRequest, sendApiPostRequest} from "../services/ApiRequests";
import UserLives from "./UserLives";
import {getUserLives} from "../services/GetUserLives";
import "../css/logIn.css"
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

function CreateLiveGame(props) {
    const [group1, setGroup1] = useState("-1");
    const [group2, setGroup2] = useState("-1");
    const [teams, setTeams] = useState([]);
    const [userGames, setUserGames] = useState([]);
    const [addMoreGame, setAddMoreGame] = useState(false);
    const [goalsGroupA, setGoalsGroupA] = useState(0);
    const [goalsGroupB, setGoalsGroupB] = useState(0);
    const [itFinish, setItFinish] = useState(false);

    const teams1 = teams.filter(team => team !== group2);
    const teams2 = teams.filter(team => team !== group1);

    useEffect(() => {
        sendApiGetRequest("http://localhost:8989/get-available-groups", (response) => {
            const res = response.data;
            setTeams(res);
            console.log(res);
        })
    }, [])
    useEffect(() => {
        getUserGames();
    }, [])

    const getUserGames = () => {
        getUserLives(props.user.token, (response) => {
            const userGames = response.data;
            setUserGames(userGames);
            console.log(userGames)
        })
    }

    const updateGroup1 = (e) => {
        setGroup1(e.target.value);
    }
    const updateGroup2 = (e) => {
        setGroup2(e.target.value);
    }
    const saveGame = () => {
        sendApiPostRequest("http://localhost:8989/save-game",
            {group1Name: group1, group2Name: group2, token: props.user.token}, (response) => {
                getUserGames();
                setAddMoreGame(false)
            })
    }

    const updateGoalsGroupA = (goals) => {
        setGoalsGroupA(goals);
        sendApiPostRequest("http://localhost:8989/update-goals",
            {groupAName: group1, groupBName: group2, goalsGroupA: goalsGroupA, goalsGroupB: goalsGroupB}
            , (response) => {
            })
    }
    const updateGoals = (goalsA, goalsB, groupA, groupB) => {
        console.log(goalsA + goalsB)
        sendApiPostRequest("http://localhost:8989/update-goals",
            {groupAName: groupA, groupBName: groupB, goalsGroupA: goalsA, goalsGroupB: goalsB}
            , (response) => {
            })
    }
    const finishGame = (group1, group2) => {
        sendApiPostRequest("http://localhost:8989/finish-game", {
            group1Name: group1,
            group2Name: group2
        }, (response) => {
            getUserGames();
        })
    }

    return (
        <div>
            {
                userGames.length > 0 &&
                <div>
                    {
                        userGames.map((game) => {
                                return (
                                    <div >
                                        <UserLives updateGoals={updateGoals} endGame={finishGame} game={game}/>
                                    </div>
                                )
                            }
                        )}
                </div>
            }
            {addMoreGame &&
                <div className={"select-game"}>
                    <div>
                        <FormControl sx={{ m: 1, width: 200 }} style={{backgroundColor: "rgba(108,255,211,0.5)"}}>
                            <InputLabel id="demo-simple-select-label">Group A</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={group1}
                                label="Age"
                                onChange={updateGroup1}
                                outline
                            >
                                <MenuItem value={-1} disabled={true}>Group A</MenuItem>
                                {
                                    teams1.map(team => {
                                        return (
                                            <MenuItem value={team}>{team}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>

                        <FormControl sx={{ m: 1, width: 200 }} style={{backgroundColor: "rgba(108,255,211,0.5)"}}>
                            <InputLabel id="demo-simple-select-label">Group B</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={group2}
                                label="Age"
                                onChange={updateGroup2}
                            >
                                <MenuItem value={-1} disabled={true}>Group A</MenuItem>
                                {
                                    teams2.map(team => {
                                        return (
                                            <MenuItem value={team}>{team}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                    </div>
                    <button id={"start-button"} disabled={group1 === "-1" || group2 === "-1"} onClick={saveGame}>Start Game</button>
                </div>
            }
                <div>
                   <button id={"add-game-button"} onClick={() => {
                       setAddMoreGame(prevState => !prevState)
                       setGroup1("-1")
                       setGroup2("-1")
                   }}>{addMoreGame ? "-":"+"}</button>
                </div>
        </div>
    )
}

export default CreateLiveGame;