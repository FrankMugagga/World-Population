import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import Continents from '../features/countries/continents';
import store from '../redux/store';

describe('performing test for rockets', () => {
  it('testing if rockets page really matches', () => {
    const rocketRender = renderer
      .create(
        <Provider store={store}>
          <Continents />
        </Provider>,
      )
      .toJSON();
    expect(rocketRender).toMatchSnapshot();
  });
});
