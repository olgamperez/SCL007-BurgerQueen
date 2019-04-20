import React from 'react';
import App from './App.js';
import { shallow } from 'enzyme';



describe('App',()=>{
  it('renders Header', ()=>{
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header').length).toBe(1);
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
it('debe retornar olga perez', () => {
  const burgerComponent = Enzyme.mount(<App />); //burgerQueen es el nombre de mi componente constructor donde
  const inputComponent = burgerComponent.find('Registerclient').find('input');
  const buttonComponent = burgerComponent.find('button');
  inputComponent.simulate('change', { target: {value: 'olga perez'} });
  buttonComponent.filter('.btn-name').simulate('click');
  expect(burgerComponent.state().name).toEqual('olga perez');
});

