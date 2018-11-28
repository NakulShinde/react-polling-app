import React from "react";

import { votePercentage, parseChoiceURL } from "./../../Utils/Utils";

import styles from "./Choice.module.scss";

const Choice = props => {
    const choiceUrlObj = parseChoiceURL(props.choice.url)
    return (
        <div className={styles.question__choice}>
            <div data-label="Choice:" className={styles.question__choice__section}>
                {props.choice.choice}
            </div>
            <div data-label="Vote:" className={styles.question__choice__section}>
                {props.choice.votes}
            </div>
            <div
                data-label="Percentage:"
                className={styles.question__choice__section}
            >
                {votePercentage(props.choice.votes, props.totalVotes)}%
            </div>
            <div data-label="Action:" className={styles.question__choice__section}>
                <input onChange={() => props.onVoteSelect(choiceUrlObj) }  name="question_choice_select" type="radio" />
            </div>
        </div>
    );
};

export default Choice;
