import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '@testing-library/jest-dom';
import CountryDetails from '../features/countries/countryDetails/DetailsCountry';

describe('Testing the country details', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <CountryDetails />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('That jest works', () => {
    expect(true).toBe(true);
  });
});
