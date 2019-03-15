import React from 'react';
import { shallow } from 'enzyme';
import Food from '../../components/food.js';

it('renders no products when  store in empty', ()=>{
    const wrapper = shallow(<Food props={[]}/>)
    expect(wrapper.find("").length).toBe(0);
});