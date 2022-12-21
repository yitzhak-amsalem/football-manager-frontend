import React, {Component ,useState, useEffect} from "react";
import axios from "axios";


export default function  LeagueTableLive(){

    const [leagueTableLive, setLeagueTableLive] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8989/get-league-table")
            .then(res => {
                const updatedTable = res.data;
                setLeagueTableLive(updatedTable);
            },);
    });

    return (
        <div>
            <table style={{border: "1px solid black"}}>
                <tr>
                    <th>Pos</th>
                    <th>Club</th>
                    <th>Played</th>
                    <th>Won</th>
                    <th>Drawn</th>
                    <th>Lost</th>
                    <th>GF</th>
                    <th>GA</th>
                    <th>GD</th>
                    <th>Points</th>
                </tr>
                {
                    leagueTableLive.map((row, i) => {
                        return(
                            <tr>
                                <th>{i + 1}</th>
                                <th>{row.groupName}</th>
                                <th>{row.wins + row.losses + row.draws}</th>
                                <th>{row.wins}</th>
                                <th>{row.losses}</th>
                                <th>{row.draws}</th>
                                <th>{row.goalsForward}</th>
                                <th>{row.goalsAgainst}</th>
                                <th>{row.goalsForward - row.goalsAgainst}</th>
                                <th>{row.wins * 3 + row.draws}</th>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );


}
