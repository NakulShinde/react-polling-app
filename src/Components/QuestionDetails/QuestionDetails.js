import React, {Component} from 'react';
import {Link} from "react-router-dom";

import {getQuestionTotalVotes, votePercentage} from './../../Utils/Utils'

import styles from './QuestionDetails.module.scss'
import buttonStyles from './../Buttons/Buttons.module.scss';

class QuestionDetails extends Component {

    render() {
        const {questionDetails} = this.props;
        if (questionDetails && !questionDetails.choices) {
            return <div></div>
        }
        const totalVotes = getQuestionTotalVotes(questionDetails.choices);

        return (
            <div className={styles.question__container}>
                <div className={styles.question_heading}>Q: {questionDetails.question}</div>

                <div className={styles.question__container__content}>
                    {questionDetails
                        .choices
                        .map((choice, index) => {
                            return <div key={index} className={styles.question__choice}>
                                <div data-label='Choice:' className={styles.question__choice__section}>{choice.choice}</div>
                                <div data-label='Vote:' className={styles.question__choice__section}>{choice.votes}</div>
                                <div data-label='Percentage:' className={styles.question__choice__section}>{votePercentage(choice.votes, totalVotes)}%</div>
                                <div data-label='Action:' className={styles.question__choice__section}>
                                    <input name="question_choice_select" type="radio"></input>
                                </div>
                            </div>
                        })}
                    <div className={styles.question__choice__footer}>
                        <Link to={`/`}>
                            <button
                                id="goback"
                                className={`${buttonStyles.button} ${buttonStyles.buttonBlueHollow}`}>
                                Go Back
                            </button>
                        </Link>

                        <button
                                id="vote"
                                className={buttonStyles.button}>
                                Vote
                            </button>
                    </div>
                </div>

            </div>
        );
    }
}

export default QuestionDetails;
