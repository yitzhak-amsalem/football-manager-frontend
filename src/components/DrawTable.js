import React from "react";
import "../css/Table.css"

export default function DrawTable(props) {
    const leagueTable = props.table;

    return (
        <div id={"table-container"}>
            {
                leagueTable.length > 0 &&
                <table>
                    <thead>
                    <tr id={"table-row-header"}>
                        <th className={"border-header border-header-sort"}>Position</th>
                        <th className={"border-header border-header-sort"}>Club</th>
                        <th className={"border-header border-header-sort"}>Played</th>
                        <th className={"border-header border-header-sort"}>Won</th>
                        <th className={"border-header border-header-sort"}>Drawn</th>
                        <th className={"border-header border-header-sort"}>Lost</th>
                        <th className={"border-header border-header-sort"}>GF</th>
                        <th className={"border-header border-header-sort"}>GA</th>
                        <th className={"border-header border-header-sort"}>GD</th>
                        <th className={"border-header border-header-sort"}>Points</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        leagueTable.map((row, i) => {
                            return (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{row.groupName}</td>
                                    <td>{row.wins + row.losses + row.draws}</td>
                                    <td>{row.wins}</td>
                                    <td>{row.draws}</td>
                                    <td>{row.losses}</td>
                                    <td>{row.goalsForward}</td>
                                    <td>{row.goalsAgainst}</td>
                                    <td>{row.goalsForward - row.goalsAgainst}</td>
                                    <td>{row.wins * 3 + row.draws}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            }
        </div>
    );
}
