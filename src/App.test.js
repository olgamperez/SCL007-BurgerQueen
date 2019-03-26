import React from 'react';
import App from './App.js';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App',()=>{
  it('renders Kitchen', ()=>{
    const wrapper = shallow(<App />);
    expect(wrapper.find('Kitchen').length).toBe(1);
  });
  it('renders Food', ()=>{
    const wrapper = shallow(<App />);
    expect(wrapper.find('Food').length).toBe(1);
  });
  it('renders Registerclient', ()=>{
    const wrapper = shallow(<App />);
    expect(wrapper.find('Registerclient').length).toBe(1);
  });
})
