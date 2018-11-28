import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from "./Store/index"
import PollContainer from './Components/PollContainer/PollContainer';
import QuestionDetailsContainer from './Components/QuestionDetailsContainer/QuestionDetailsContainer'

import styles from './App.module.scss';

class App extends Component {
    render() {
        return (
          <Provider store={store}>
            <div className={styles.app}>
                <header className={styles.app__header}>
                    Polling Application
                </header>
                <BrowserRouter>
                    <div className={styles.app__main__container}>
                        <Route exact path="/" component={PollContainer}/>
                        <Route path="/questions/:questions_id" component={QuestionDetailsContainer}/>
                    </div>
                </BrowserRouter>
            </div>
          </Provider>
        );
    }
}

export default App;
