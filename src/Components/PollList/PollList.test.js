import React from 'react';
import renderer from "react-test-renderer";
import {shallow} from 'enzyme';
import {MemoryRouter} from "react-router-dom";

import PollList from './PollList';

// create props to initialize
const props = {
    questionsList: [
        {
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
    ]
}
let wrapper;
beforeEach(() => {
    wrapper = shallow(
        <MemoryRouter>
            <PollList {...props}/>
        </MemoryRouter>
    )
})

it("renders PollList snapshot correctly", () => {
    const tree = renderer
        .create(wrapper)
        .toJSON();
    expect(tree).toMatchSnapshot();
});