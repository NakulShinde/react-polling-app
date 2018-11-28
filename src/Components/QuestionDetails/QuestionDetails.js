import React, {Component} from 'react';
import {Link} from "react-router-dom";

import {getQuestionTotalVotes} from './../../Utils/Utils'

import styles from './QuestionDetails.module.scss'
import buttonStyles from './../Buttons/Buttons.module.scss';
import Choice from '../Choice/Choice';

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
                            return <Choice key={index} choice={choice} totalVotes={totalVotes}></Choice>
                        })}
                    <div className={styles.question__choice__footer}>
                        <Link to={`/`}>
                            <button
                                id="goback"
                                className={`${buttonStyles.button} ${buttonStyles.buttonBlueHollow}`}>
                                Go Back
                            </button>
                        </Link>

                        <button id="vote" className={buttonStyles.button}>
                            Vote
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}

export default QuestionDetails;
