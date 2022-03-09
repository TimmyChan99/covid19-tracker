import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from './storeMock';
import Region from '../component/countries/Region';
import RegionsList from '../component/countries/RegionsList';

it('Test Region component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Region
        countryName="Region"
        confimedCases={152}
      />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

it('Test Region component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <RegionsList />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
