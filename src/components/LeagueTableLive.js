import React, {Component} from "react";
import axios from "axios";

export default class LeagueTableLive extends Component{
    state = {
        table: []
    }

    componentDidMount() {
        axios.get("http://localhost:8989/get-league-table")
            .then(res => {
                const updateTable = res.data;
                this.setState({
                    table: updateTable
                })
            })}

    render() {
        return(
            <div>
                <table style={{border: "1px solid black"}}>
                    <tr>
                        <th>NO.</th>
                        <th>Team</th>
                        <th>Won</th>
                        <th>Drawn</th>
                        <th>Lost</th>
                    </tr>
                    {
                        this.state.table.map((team, i) => {
                            return(
                                <tr>
                                    <th>{i + 1}</th>
                                    <th>{team.teamName}</th>
                                    <th>{team.won}</th>
                                    <th>{team.drawn}</th>
                                    <th>{team.lost}</th>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        )
    }

}