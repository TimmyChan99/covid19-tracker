import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './storeMock';
import CountryBox from '../component/detailsPage/CountryBox';
import StatsDetails from '../component/detailsPage/StatsDetails';
import Details from '../component/detailsPage/Details';

it('Test Region component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <CountryBox
          countryName="Country"
          countryNewCases={152}
        />
      </BrowserRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});


it('Test Region component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    </Provider>,
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
