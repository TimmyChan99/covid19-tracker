const STORE_SELECTED_COUNTRY = 'covid19-tracker/__Test__/STORE_SELECTED_COUNTRY';
const ALL_DATA = 'covid19-tracker/__Test__/ALL_DATA';

const initialState = [
  { id: 'selected', name: 'default' },
];

const data = [

  {
    name: 'Total',
    totalNewCases: 1637765,
  },
  {
    countryId: 'afghanistan',
    countryName: 'Afghanistan',
    countryNewCases: 194,
    regions: 'no region found',
  },
  {
    countryId: 'argentina',
    countryName: 'Argentina',
    countryNewCases: 8141,
    regions: [
      {
        regionName: 'Neuquén',
        regionNewCases: 0,
      },
    ],
  },

];

export const storeSelectedCountry = (countryName) => ({
  type: STORE_SELECTED_COUNTRY,
  payload: countryName,
});

export const getAllStatisticsAction = (data) => ({
  type: ALL_DATA,
  payload: data,
});

// export const getAllStatiticsDispatcher = () => async (dispatch) => {
//   dispatch(getAllStatisticsAction(data));
// };

const statsReducerMock = (state = initialState, action) => {
  switch (action.type) {
    case STORE_SELECTED_COUNTRY:
      return state.map((item) => (item.id === 'selected' ? { ...item, name: action.payload } : item));

    case ALL_DATA:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default statsReducerMock;
export { data, initialState };
