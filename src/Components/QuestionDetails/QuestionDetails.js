import React, {Component} from 'react';
import {Link} from "react-router-dom";

import {getQuestionTotalVotes} from './../../Utils/Utils'

import styles from './QuestionDetails.module.scss'
import buttonStyles from './../Buttons/Buttons.module.scss';
import Choice from '../Choice/Choice';

class QuestionDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            voteSelected: ''
        }
        this.onVoteSelect = this
            .onVoteSelect
            .bind(this);
        this.onVoteForChoice = this
            .onVoteForChoice
            .bind(this);
    }

    onVoteSelect(voteValue) {
        this.setState({voteSelected: voteValue});
    }

    onVoteForChoice(){
        if(this.state.voteSelected !== ''){
            this.props.voteForSelectedChoice(this.state.voteSelected)
        }
    }
    render() {
        const {questionDetails} = this.props;
        if (questionDetails && !questionDetails.choices) {
            return <div></div>
        }
        const totalVotes = getQuestionTotalVotes(questionDetails.choices);
        const voteButtonDisable = (this.state.voteSelected === '')
            ? buttonStyles.buttonDisabled
            : ''
        return (
            <div className={styles.question__container}>
                <div className={styles.question_heading}>Q: {questionDetails.question}</div>

                <div className={styles.question__container__content}>
                    {questionDetails
                        .choices
                        .map((choice, index) => {
                            return <Choice key={index} choice={choice} totalVotes={totalVotes} onVoteSelect={this.onVoteSelect}></Choice>
                        })}
                    <div className={styles.question__choice__footer}>
                        <Link to={`/`}>
                            <button
                                id="goback"
                                className={`${buttonStyles.button} ${buttonStyles.buttonBlueHollow}`}>
                                Go Back
                            </button>
                        </Link>

                        <button id="vote" onClick={this.onVoteForChoice} className={`${buttonStyles.button} ${voteButtonDisable}`}>
                            Vote
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}

export default QuestionDetails;
