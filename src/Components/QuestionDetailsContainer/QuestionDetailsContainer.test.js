import React from 'react';
import renderer from "react-test-renderer";
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';

import QuestionDetailsContainer from './QuestionDetailsContainer';
import {fetchQuestionsDetails, voteForChoice} from "./../../Actions/QuestionsDetails";

// create props to initialize
const props = {
    match: {
        params: {
            questions_id: 10
        }
    },
    voteForChoice: jest.fn()
}
const voteSelected = {
    questionId: '1234',
    choiceId: '123'
}
const mockStore = configureStore([thunk]);

let initialState;
let wrapper;
let store;
beforeEach(() => {
    // create any initial state needed
    initialState = {
        isLoading: false,
        hasErrored: false,
        questionDetails: {}
    };
    //creates the store with any initial state or middleware needed
    store = mockStore(initialState)
    wrapper = shallow(<QuestionDetailsContainer {...props} store={store}/>).dive()
})

it("renders QuestionDetailsContainer snapshot correctly", () => {
    const tree = renderer
        .create(wrapper)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders QuestionDetailsContainer with heading', () => {
    const welcome = "Question Details";
    expect(wrapper.contains(welcome)).toEqual(true);
});

it('renders QuestionDetailsContainer with Loading & Error', () => {   
    wrapper.setProps({isLoading: true});
    const loadingMsg = "Loading...";
    expect(wrapper.contains(loadingMsg)).toEqual(true);
    
    wrapper.setProps({hasErrored: true});
    const errorMsg = "Internal Error. Please try again later.";
    expect(wrapper.contains(errorMsg)).toEqual(true);
});

it("QuestionDetailsContainer store methods checks", () => {
    store.dispatch(fetchQuestionsDetails(voteSelected.questionId))
    let action = store.getActions()
    expect(action[0].type).toBe("API_IS_LOADING")
    
    store.dispatch(voteForChoice(voteSelected))
    action = store.getActions()
    expect(action[0].type).toBe("API_IS_LOADING")
});
/*
it("QuestionDetailsContainer voteForChoice called on voteForSelectedChoice", () => {
    
    const instance = wrapper.instance();
    instance.voteForSelectedChoice(voteSelected);

    expect(props.voteForChoice).toHaveBeenCalled();
});
*/