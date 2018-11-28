import React from 'react';
import renderer from "react-test-renderer";
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);

import PollContainer from './PollContainer';

// create any initial state needed
const initialState = {
    isLoading: false,
    hasErrored: false,
    questionsList: []
};

let wrapper;
let store;
beforeEach(() => {
    //creates the store with any initial state or middleware needed
    store = mockStore(initialState)
    wrapper = shallow(<PollContainer store={store}/>).dive()
})

it("renders PollContainer snapshot correctly", () => {
    const tree = renderer
        .create(wrapper)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders PollContainer with heading', () => {
    const welcome = "Poll Questions";
    expect(wrapper.contains(welcome)).toEqual(true);
});

