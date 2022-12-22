import React, {useState, useEffect} from "react";
import {getLeagueTable} from "../services/GetTable";
import DrawTable from "./DrawTable";


export default function LeagueTableLive() {

    const [leagueTableLive, setLeagueTableLive] = useState([]);

    useEffect(() => {
        getLeagueTable(true, (response) => {
            const updatedTable = response.data;
            setLeagueTableLive(updatedTable);
        })
    }, );

    return (
        <div className={"league-table live"}>
            <DrawTable table={leagueTableLive}/>
        </div>
    );


}
