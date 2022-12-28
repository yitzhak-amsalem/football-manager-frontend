import React, {useState} from "react";
import "../css/LiveGamesStyle.css"
import "../css/logIn.css"

export default function UserLiveGame(props) {
    const groupA = props.game.groupA.groupName;
    const groupB = props.game.groupB.groupName;
    return (
        <div id={"main-container"}>
            <table className={"live-games-table"}>
                <tbody id={"lives"}>
                <tr id={"live-games-tr"}>
                    <td className={"button-td"}>
                        <button className={"goals-button"} onClick={() => {
                            props.updateGoals(props.game.goalsGroupA + 1, props.game.goalsGroupB, groupA, groupB)
                        }}>+
                        </button>
                        <button disabled={props.game.goalsGroupA === 0} className={"goals-button"} onClick={() => {
                            props.updateGoals(props.game.goalsGroupA - 1, props.game.goalsGroupB, groupA, groupB)
                        }}>-
                        </button>
                    </td>
                    <td id={"left-td"}>{groupA}</td>
                    <td id={"right-td-g"} className={"goals"}>
                        {props.game.goalsGroupA}
                    </td>
                    <td id={"center-td"}>-</td>
                    <td id={"left-td-g"} className={"goals"}>
                        {props.game.goalsGroupB}
                    </td>
                    <td id={"right-td"}>{groupB}</td>
                    <td className={"button-td"}>
                        <button className={"goals-button"} onClick={() => {
                            props.updateGoals(props.game.goalsGroupA, props.game.goalsGroupB + 1, groupA, groupB)
                        }}>+
                        </button>
                        <button disabled={props.game.goalsGroupB === 0} className={"goals-button"} onClick={() => {
                            props.updateGoals(props.game.goalsGroupA, props.game.goalsGroupB - 1, groupA, groupB)
                        }}>-
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
            <div>
                <button id={"end-button"} onClick={() => props.endGame(groupA, groupB)}>End Game</button>
            </div>

        </div>
    )

}