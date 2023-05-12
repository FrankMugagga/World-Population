import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../redux/store';
import Country from '../features/countries/country/Country';

describe('performing test for rockets', () => {
  it('testing if rockets page really matches', () => {
    const rocketRender = renderer
      .create(
        <Provider store={store}>
          <Country />
        </Provider>,
      )
      .toJSON();
    expect(rocketRender).toMatchSnapshot();
  });
});
