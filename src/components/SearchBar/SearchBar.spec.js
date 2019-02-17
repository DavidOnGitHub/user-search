import React from 'react';
import { mount } from 'enzyme';
import { SearchBar } from './index';
import * as dataService from '../../utils/dataService';

describe('SearchBar', () => {
  it('should run dataService 300ms after typing more than 2 characters', (done) => {
    const wrapper = mount(<SearchBar />);
    dataService.searchUser = jest.fn();
    wrapper.find('input').simulate('change', { target: { value: 'Stev' } });
    setTimeout(() => {
      expect(dataService.searchUser.mock.calls.length).toBe(1);
      done();
    }, 400);
  });

  it('should not run dataService when typing less than or equal to 2 characters', (done) => {
    const wrapper = mount(<SearchBar />);
    dataService.searchUser = jest.fn();
    wrapper.find('input').simulate('change', { target: { value: 'St' } });
    setTimeout(() => {
      expect(dataService.searchUser.mock.calls.length).toBe(0);
      done();
    }, 400);
  });
});
