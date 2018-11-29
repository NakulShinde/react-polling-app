import React from 'react';
import renderer from "react-test-renderer";
import {shallow} from 'enzyme';
import {MemoryRouter} from "react-router-dom";

import Choice from './Choice';

// create props to initialize
const props = {
    choice: {
        "url": "/questions/9/choices/65",
        "votes": 246,
        "choice": "Tea"
    }
}
let wrapper;
beforeEach(() => {
    wrapper = shallow(
        <MemoryRouter>
            <Choice {...props}/>
        </MemoryRouter>
    )
})

it("renders Choice snapshot correctly", () => {
    const tree = renderer
        .create(wrapper)
        .toJSON();
    expect(tree).toMatchSnapshot();
});