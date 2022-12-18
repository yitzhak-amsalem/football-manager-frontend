import React, {Component} from "react";
import axios from "axios";

export default class LeagueTable extends Component{
    state = {
        table: [
            {
                groupName: "",
                wins: 0,
                losses: 0,
                draws: 0,
                goalsForward: 0,
                goalsAgainst: 0
            }
        ],
        available: []
    }
    getTable = () => {
        axios.get("http://localhost:8989/get-league-table")
            .then(res => {
                const updateTable = res.data;
                this.setState({
                    table: updateTable
                })
            })
    }
    getAvailable = () => {
        axios.get("http://localhost:8989/get-available-groups")
            .then(res => {
                const updateTable = res.data;
                this.setState({
                    available: updateTable
                })
            })
    }
/*    setAvailable = () => {
        axios.get("http://localhost:8989/set-group-in-live",
            {
                params:{
                    groupName: "Barcelona"
                }
            })
            .then();
    }*/

    componentDidMount() {

        const newTable = [
            {
                club: "ManC",
                won: 21,
                drawn: 5,
                lost: 3,
                GF: 61,
                GA: 21
            },
            {
                club: "ManU",
                won: 15,
                drawn: 9,
                lost: 4,
                GF: 55,
                GA: 32
            },
            {
                club: "Leicester",
                won: 16,
                drawn: 5,
                lost: 7,
                GF: 48,
                GA: 32
            },
            {
                club: "Chelsea",
                won: 14,
                drawn: 8,
                lost: 6,
                GF: 44,
                GA: 25
            },
            {
                club: "WestHam",
                won: 14,
                drawn: 6,
                lost: 7,
                GF: 42,
                GA: 31
            }
        ];

    }

    render() {
        return(
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
                        this.state.table.map((row, i) => {
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
                <button onClick={this.getTable}> get table</button>
                <button onClick={this.getAvailable}>getAvailable</button>
{/*                <button onClick={this.setAvailable}>setAvailable</button>*/}
                {this.state.available.length > 0 &&
                this.state.available.map(team => team)}

            </div>
        )
    }

}
