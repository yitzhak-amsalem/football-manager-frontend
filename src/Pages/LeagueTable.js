import React, {useState, useEffect} from "react";
import {getLeagueTable} from "../services/GetTable";
import DrawTable from "../components/DrawTable";

export default function LeagueTable() {
    const [leagueTable, setLeagueTable] = useState([]);

    useEffect(() => {
        getLeagueTable(false, (response) => {
            const updatedTable = response.data;
            setLeagueTable(updatedTable);
        })
    }, []);

    return (
        <div className={"league-table"}>
            <DrawTable table={leagueTable}/>
        </div>
    );
}
