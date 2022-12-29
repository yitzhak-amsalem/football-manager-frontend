import React, {useState, useEffect} from "react";
import {getLeagueTableLive} from "../services/GetTable";
import DrawTable from "../components/DrawTable";


export default function LeagueTableLive() {

    const [leagueTableLive, setLeagueTableLive] = useState([]);

    useEffect(() => {
        getLeagueTableLive((response) => {
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
