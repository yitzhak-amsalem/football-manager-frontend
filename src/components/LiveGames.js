import React, {Component, useEffect, useState} from "react";
import LiveGameResults from "./LiveGameResults"
import {getLiveGames} from "../services/GetLiveGames";
import "../css/LiveGamesStyle.css"

export default function LiveGames(props) {
    const [games, setGames] = useState([]);
    const [number, setNumber] = useState(props.update);

    useEffect(() => {
        setNumber(props.update)
            getLiveGames((response) => {
                setGames(response.data)
                console.log(games)
            })

    }, [props.update])
    return(
        <div>
            <h2>Live Games</h2>
            {
                games.length === 0 ?
                    <div>there are no live games</div>
                    :
                    <div>
                        {games.map(game => {
                            return(
                                <LiveGameResults game={game}/>
                            )
                        })}
                    </div>
            }
        </div>
    )

}