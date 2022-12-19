import React, {useState} from "react";

export default function LiveGameResults(props) {

    return(
        <div>
            <span>{props.game.groupA.groupName + " " + props.game.goalsGroupA}</span>
            <span>{" - "}</span>
            <span>{props.game.goalsGroupB + " " + props.game.groupB.groupName}</span>
        </div>
    )

}