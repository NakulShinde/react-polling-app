import React, { Component } from "react";
import { connect } from "react-redux";

import PollList from "../PollList/PollList";
import { fetchQuestionsList } from "./../../Actions/QuestionList";

import styles from "./PollContainer.module.scss";

class PollContainer extends Component {
  componentDidMount() {
    this.props.fetchQuestionsList();
  }
  render() {
    if(this.props.isLoading || this.props.hasErrored){
        return <div className={styles.poll__container}>
            {(this.props.isLoading) && <div>Loading...</div>}
            {(this.props.hasErrored) && <div>Internal Error. Please try again later.</div>}
        </div>
    }
    
    return (
      <div>
        <h4>Poll Questions</h4>
        <div className="poll__content">
          <PollList
            isLoading={this.props.isLoading}
            questionsList={this.props.questionsList}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questionsList: state.questionsList,
    hasErrored: state.hasErrored,
    isLoading: state.isLoading
  };
};

const matchDispatchToProps = dispatch => {
  return {
    fetchQuestionsList: url => dispatch(fetchQuestionsList(url))
  };
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(PollContainer);
