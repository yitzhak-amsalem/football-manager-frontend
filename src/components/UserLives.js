import React, {useState} from "react";
import "../css/LiveGamesStyle.css"
import "../css/logIn.css"

export default function UserLives(props) {

    const [goalsGroupA, setGoalsGroupA] = useState(props.game.goalsGroupA);
    const [goalsGroupB, setGoalsGroupB] = useState(props.game.goalsGroupB);
    let groupA = props.game.groupA.groupName
    let groupB = props.game.groupB.groupName
    return (
        <div id={"main-container"}>
            <table className={"live-games-table"}>
                <tbody id={"lives"}>
                <tr id={"live-games-tr"}>
                    <td className={"button-td"}>
                        <button className={"goals-button"} onClick={() => {
                            setGoalsGroupA(goalsGroupA + 1)
                            props.updateGoals(goalsGroupA+1, goalsGroupB, groupA, groupB)
                        }}>+</button>
                        <button className={"goals-button"} onClick={() => {
                            setGoalsGroupA(goalsGroupA - 1)
                            props.updateGoals(goalsGroupA-1, goalsGroupB, groupA, groupB)
                        }}>-</button>
                    </td>
                    <td id={"left-td"}>{groupA}</td>
                    <td id={"right-td-g"} className={"goals"}>
                        {goalsGroupA}
                    </td>
                    <td id={"center-td"}>-</td>
                    <td id={"left-td-g"} className={"goals"}>
                        {goalsGroupB}
                    </td>
                    <td id={"right-td"}>{groupB}</td>
                    <td className={"button-td"}>
                        <button className={"goals-button"} onClick={() => {
                            setGoalsGroupB(goalsGroupB + 1)
                            props.updateGoals(goalsGroupA, goalsGroupB+1, groupA, groupB)
                        }}>+</button>
                        <button className={"goals-button"} onClick={() => {
                            setGoalsGroupB(goalsGroupB - 1)
                            props.updateGoals(goalsGroupA, goalsGroupB-1, groupA, groupB)
                        }}>-</button>
                    </td>
                </tr>
                </tbody>
            </table>
            <div>
                <button id={"end-button"} onClick={() => props.endGame(groupA, groupB)}> End Game </button>
            </div>

        </div>
    )

}