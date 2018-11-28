import React, { Component } from 'react';
import Question from '../Question/Question';

import styles from "./PollList.module.scss"

class PollList extends Component {
	render() {
		return (
			<div className={styles.poll__list}>
				<div className={styles.poll__list__container}>
					{this
						.props
						.questionsList
						.map((question, index) => {
							return <Question key={index} question={question}></Question>
						})}	
				</div>
			</div>
		);
	}
}

export default PollList;
