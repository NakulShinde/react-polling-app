import React from 'react';
import renderer from "react-test-renderer";
import {shallow} from 'enzyme';

import {CustomButton} from './Buttons';

// create props to initialize
const props = {
    onClickHandler: jest.fn(),
    text: "Button Text",
    isDisable: false,
    customClass: ['button']
}
const fakeEvent = {
    preventDefault: () => console.log('preventDefault')
};
let wrapper;
beforeEach(() => {
    wrapper = shallow(<CustomButton {...props}/>)
})

it("renders CustomButton snapshot correctly", () => {
    const tree = renderer
        .create(wrapper)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("CustomButton onchage called on onClickHandler", () => {

    const button = wrapper.find('button');
    expect(button.length).toBe(1);

    button.simulate('click', fakeEvent)
    expect(props.onClickHandler).toHaveBeenCalled();

});