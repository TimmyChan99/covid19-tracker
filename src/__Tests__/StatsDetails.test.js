import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './storeMock';
import StatsDetails from '../component/detailsPage/StatsDetails';
import { getAllStatiticsDispatcher, data, getAllStatisticsAction } from './reduxMock';
// import { getAllStatisticsAction } from

it('Test Region component', () => {
  const dispatch = jest.fn();
  dispatch(getAllStatisticsAction(data));
  console.log(data);
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <StatsDetails />
      </BrowserRouter>
    </Provider>,
  );
});
