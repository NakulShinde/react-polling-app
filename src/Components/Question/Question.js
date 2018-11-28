import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import styles from './Question.module.scss'

class Question extends Component {
    render() {
        const {url, question, choices, published_at} = this.props.question;
        const date = new Date(published_at).toLocaleString();
        return (
            <div className={styles.question__container}>
                <Link to={url}>
                    <div className={styles.question__heading}>Q: {question}</div>
                    <div className={styles.question__details}>
                        <div>Published at: {date}
                        </div>
                        Question Length (Choices): {choices.length}
                    </div>
                </Link>
            </div>
        );
    }
}

export default Question;
