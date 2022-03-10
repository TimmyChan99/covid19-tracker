import getAllStatitics from '../../api/covidTrackingAPI';

const STORE_SELECTED_COUNTRY = 'covid19-tracker/dates/STORE_SELECTED_COUNTRY';
const ALL_DATA = 'covid19-tracker/dates/ALL_DATA';

const initialState = [
  { id: 'selected', name: 'default' },
];

export const storeSelectedCountry = (countryName) => ({
  type: STORE_SELECTED_COUNTRY,
  payload: countryName,
});

export const getAllStatisticsAction = (data) => ({
  type: ALL_DATA,
  payload: data,
});

export const getAllStatiticsDispatcher = (date) => async (dispatch) => {
  const data = await getAllStatitics(date);
  dispatch(getAllStatisticsAction(data));
};

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_SELECTED_COUNTRY:
      return state.map((item) => (item.id === 'selected' ? { ...item, name: action.payload } : item));

    case ALL_DATA:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default statsReducer;
