import React, {Component} from "react";
import {connect} from "react-redux";

import QuestionDetails from "./../QuestionDetails/QuestionDetails";
import {fetchQuestionsDetails} from "./../../Actions/QuestionsDetails";

import styles from "./QuestionDetailsContainer.module.scss";

class QuestionDetailsContainer extends Component {
    componentDidMount() {
        this.questionId = this.props.match.params["questions_id"];
        this
            .props
            .fetchQuestionsDetails(this.questionId);
    }
    render() {
        if (this.props.isLoading || this.props.hasErrored) {
            return <div className={styles.question__details__container}>
                {(this.props.isLoading) && <div>Loading...</div>}
                {(this.props.hasErrored) && <div>Internal Error. Please try again later.</div>}
            </div>
        }

        return (
            <div>
                <h4>Question Details</h4>
                
                <div className="questions__details__content">
                    <QuestionDetails questionDetails={this.props.questionDetails}/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {questionDetails: state.questionDetails, hasErrored: state.hasErrored, isLoading: state.isLoading};
};

const matchDispatchToProps = dispatch => {
    return {
        fetchQuestionsDetails: url => dispatch(fetchQuestionsDetails(url))
    };
};

export default connect(mapStateToProps, matchDispatchToProps)(QuestionDetailsContainer);
