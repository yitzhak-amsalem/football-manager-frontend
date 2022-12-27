import React, {useEffect} from "react";
import {useState} from "react";
import {sendApiGetRequest, sendApiPostRequest} from "../services/ApiRequests";
import UserLives from "./UserLives";
import {getUserLives} from "../services/GetUserLives";
import "../css/logIn.css"
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

function CreateLiveGame(props) {
    const [groupA, setGroupA] = useState("-1");
    const [groupB, setGroupB] = useState("-1");
    const [availableTeams, setAvailableTeams] = useState([]);
    const [userGames, setUserGames] = useState([]);
    const [addMoreGame, setAddMoreGame] = useState(false);

    const availableTeamsForA = availableTeams.filter(team => team !== groupB);
    const availableTeamsForB = availableTeams.filter(team => team !== groupA);

    useEffect(() => {
        getUserGames();
        getAvailableGroups();
    }, [addMoreGame])

    const getAvailableGroups = () => {
        sendApiGetRequest("http://localhost:8989/get-available-groups", (response) => {
            const res = response.data;
            setAvailableTeams(res);
        })
    }

    const getUserGames = () => {
        getUserLives(props.userToken, (response) => {
            const userGames = response.data;
            setUserGames(userGames);
        })
    }

    const updateGroupA = (e) => {
        setGroupA(e.target.value);
    }
    const updateGroupB = (e) => {
        setGroupB(e.target.value);
    }
    const saveGame = () => {
        sendApiPostRequest("http://localhost:8989/save-game",
            {groupAName: groupA, groupBName: groupB, token: props.userToken}, (response) => {
                setAddMoreGame(false)
            })
    }

    const updateGoals = (goalsA, goalsB, groupA, groupB) => {
        sendApiPostRequest("http://localhost:8989/update-goals",
            {groupAName: groupA, groupBName: groupB, goalsGroupA: goalsA, goalsGroupB: goalsB}
            , (response) => {
                getUserGames();
            })
    }

    const endGame = (groupA, groupB) => {
        sendApiPostRequest("http://localhost:8989/end-game", {
            groupAName: groupA,
            groupBName: groupB
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
            {
                addMoreGame &&
                <div className={"select-game"}>
                    <div>
                        <FormControl sx={{m: 1, width: 200}} style={{backgroundColor: "rgba(108,255,211,0.5)"}}>
                            <InputLabel id="demo-simple-select-label">Group A</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={groupA}
                                label="Age"
                                onChange={updateGroupA}
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
                                value={groupB}
                                label="Age"
                                onChange={updateGroupB}
                            >
                                <MenuItem value={-1} disabled={true}>Group B</MenuItem>
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
                    <button id={"start-button"} disabled={groupA === "-1" || groupB === "-1"} onClick={saveGame}>Start
                        Game
                    </button>
                </div>
            }
            <div>
                <button disabled={availableTeams.length === 0} id={"add-game-button"} onClick={() => {
                    setAddMoreGame(prevState => !prevState)
                    setGroupA("-1")
                    setGroupB("-1")
                }}>{addMoreGame ? "-" : "+"}</button>
            </div>
        </div>
    )
}

export default CreateLiveGame;