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
            <h2>Live Games</h2>
            {
                games.length === 0 ?
                    <h2>oops! there are no live games</h2>
                    :
                    <div>
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