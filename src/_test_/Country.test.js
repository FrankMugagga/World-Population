import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/store';
import Country from '../features/countries/country/Country';

describe('performing test for Country component', () => {
  it('testing if Counties page really matches', () => {
    const continentRender = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <Country />
          </MemoryRouter>
        </Provider>,
      )
      .toJSON();
    expect(continentRender).toMatchSnapshot();
  });

  test('That jest works', () => {
    expect(true).toBe(true);
  });
});
