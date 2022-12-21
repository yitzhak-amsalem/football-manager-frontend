import React, {useState} from "react";
import "../css/LiveGamesStyle.css"

export default function LiveGameResults(props) {
    const leadColor = "green";
    const loseColor = "red";
    const equalColor = "yellow";
    let goalsGroupA = props.game.goalsGroupA;
    let goalsGroupB = props.game.goalsGroupB;
    return(
        <div className={"teams"}>
            <span style={{color: goalsGroupA !== goalsGroupB? (goalsGroupA > goalsGroupB ? leadColor : loseColor) : equalColor}}>{props.game.groupA.groupName + " "}</span>
            <span className={"goals"}>{props.game.goalsGroupA}</span>
            <span>{" : "}</span>
            <span className={"goals"}>{props.game.goalsGroupB}</span>
            <span style={{color: goalsGroupA !== goalsGroupB? (goalsGroupB > goalsGroupA ? leadColor : loseColor) : equalColor}}>{" " + props.game.groupB.groupName}</span>
        </div>
    )

}