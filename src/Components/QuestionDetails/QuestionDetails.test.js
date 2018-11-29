import React from 'react';
import renderer from "react-test-renderer";
import {shallow, mount} from 'enzyme';
import {MemoryRouter} from "react-router-dom";

import QuestionDetails from './QuestionDetails';

// create props to initialize
const props = {
    voteForSelectedChoice: jest.fn(),
    questionDetails: {
        "url": "/questions/9",
        "published_at": "2015-05-27T21:22:26.648000+00:00",
        "question": "Favourite hot beverage?",
        "choices": [
            {
                "url": "/questions/9/choices/65",
                "votes": 246,
                "choice": "Tea"
            }, {
                "url": "/questions/9/choices/67",
                "votes": 119,
                "choice": "Apple Cider"
            }, {
                "url": "/questions/9/choices/66",
                "votes": 80,
                "choice": "Coffee"
            }, {
                "url": "/questions/9/choices/68",
                "votes": 67,
                "choice": "Hot Chocolate"
            }
        ]
    }
}
const voteSelected = {
    questionId: '1234',
    choiceId: '123'
}
const fakeEvent = {
    preventDefault: () => console.log('preventDefault')
};
let wrapper;
beforeEach(() => {
    wrapper = shallow(
        <MemoryRouter>
            <QuestionDetails {...props}/>
        </MemoryRouter>
    )
})

it("renders QuestionDetails snapshot correctly", () => {
    const tree = renderer
        .create(wrapper)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("QuestionDetails voteForSelectedChoice called on onVoteForChoice", () => {
    
    const myWrapper = mount(
        <MemoryRouter>
            <QuestionDetails {...props}/>
        </MemoryRouter>
    ).find(QuestionDetails);

    const buttons = myWrapper.find('button');
    expect(buttons.length).toBe(2);

    const voteButton = myWrapper.find('#vote');
    
    voteButton.simulate('click', fakeEvent)
    expect(props.voteForSelectedChoice).not.toHaveBeenCalled();

    myWrapper.setState({voteSelected : {...voteSelected}})
    voteButton.simulate('click', fakeEvent)
    expect(props.voteForSelectedChoice).toHaveBeenCalled();
});
