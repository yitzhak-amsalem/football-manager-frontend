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

    const availableTeamsForA = teams.filter(team => team !== group2);
    const availableTeamsForB = teams.filter(team => team !== group1);

    useEffect(() => {
        getUserGames();
        getAvailableGroups();
    }, [addMoreGame])

    const getAvailableGroups = () => {
        sendApiGetRequest("http://localhost:8989/get-available-groups", (response) => {
            const res = response.data;
            setTeams(res);
        })
    }

    const getUserGames = () => {
        getUserLives(props.user.token, (response) => {
            const userGames = response.data;
            setUserGames(userGames);
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
                setAddMoreGame(false)
            })
    }

    const updateGoals = (goalsA, goalsB, groupA, groupB) => {
        sendApiPostRequest("http://localhost:8989/update-goals",
            {groupAName: groupA, groupBName: groupB, goalsGroupA: goalsA, goalsGroupB: goalsB}
            , (response) => {
                getUserGames();
                getAvailableGroups();
            })
    }

    const endGame = (group1, group2) => {
        sendApiPostRequest("http://localhost:8989/finish-game", {
            group1Name: group1,
            group2Name: group2
        }, (response) => {
            getUserGames();
            getAvailableGroups();
        })
    }

    return (
        <div>
            {
                userGames.length > 0 ?
                    <div>
                        {
                            userGames.map((game) => {
                                    return (
                                        <div>
                                            <UserLives updateGoals={updateGoals} endGame={endGame} game={game}/>
                                        </div>
                                    )
                                }
                            )}
                    </div>
                    :
                    <h2 style={{color: "#005742"}}>no games. to add a new game press +</h2>
            }
            {addMoreGame &&
                <div className={"select-game"}>
                    <div>
                        <FormControl sx={{m: 1, width: 200}} style={{backgroundColor: "rgba(108,255,211,0.5)"}}>
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
                                    availableTeamsForA.map(team => {
                                        return (
                                            <MenuItem value={team}>{team}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>

                        <FormControl sx={{m: 1, width: 200}} style={{backgroundColor: "rgba(108,255,211,0.5)"}}>
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
                                    availableTeamsForB.map(team => {
                                        return (
                                            <MenuItem value={team}>{team}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                    </div>
                    <button id={"start-button"} disabled={group1 === "-1" || group2 === "-1"} onClick={saveGame}>Start
                        Game
                    </button>
                </div>
            }
            <div>
                <button disabled={teams.length === 0} id={"add-game-button"} onClick={() => {
                    setAddMoreGame(prevState => !prevState)
                    setGroup1("-1")
                    setGroup2("-1")
                }}>{addMoreGame ? "-" : "+"}</button>
            </div>
        </div>
    )
}

export default CreateLiveGame;