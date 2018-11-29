import React from 'react';
import renderer from "react-test-renderer";
import {shallow} from 'enzyme';

import Choice from './Choice';

// create props to initialize
const props = {
    onVoteSelect: jest.fn(),
    choice: {
        "url": "/questions/9/choices/65",
        "votes": 246,
        "choice": "Tea"
    }
}
let wrapper;
beforeEach(() => {
    wrapper = shallow(<Choice {...props}/>)
})

it("renders Choice snapshot correctly", () => {
    const tree = renderer
        .create(wrapper)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("Choice input onchage called on onVoteSelect", () => {

    const input = wrapper.find('input');
    expect(input.length).toBe(1);

    input.simulate('change', {})
    expect(props.onVoteSelect).toHaveBeenCalled();

});