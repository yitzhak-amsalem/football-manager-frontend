import React, {useEffect, useState} from "react";
import LiveGameResults from "../components/LiveGameResults"
import {getLiveGames} from "../services/GetLiveGames";
import "../css/LiveGamesStyle.css"

export default function LiveGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getLiveGames((response) => {
            const games = response.data;
            setGames(games)
        })
    },)

    return (
        <div className={"live-games"}>
            {
                games.length === 0 ?
                    <h2 style={{color: "#0f1f54"}}>Oops! there are no live games.</h2>
                    :
                    <div className={"live-games"}>
                        <h2 className={"live-title"}>Live Games</h2>
                        {
                            games.map((game, i) => {
                                return (
                                    <div key={i}>
                                        <LiveGameResults game={game}/>
                                    </div>
                                )
                            })
                        }
                    </div>
            }
        </div>
    )

}