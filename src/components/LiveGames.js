import React, {useEffect, useState} from "react";
import LiveGameResults from "./LiveGameResults"
import {getLiveGames} from "../services/GetLiveGames";
import "../css/LiveGamesStyle.css"

export default function LiveGames(props) {
    const [games, setGames] = useState([]);
    const [number, setNumber] = useState(props.update);

    useEffect(() => {
        setNumber(props.update)
        getLiveGames((response) => {
            const games = response.data;
            setGames(games)
        })

    }, )

    return (
        <div className={"live-games"}>
            {
                games.length === 0 ?
                    <h2 style={{color: "#0f1f54"}}>Oops! there are no live games.</h2>
                    :
                    <div>
                        <h2 className={"live-title"}>Live Games</h2>
                        {games.map(game => {
                            return (
                                <LiveGameResults game={game}/>
                            )
                        })}
                    </div>
            }
        </div>
    )

}