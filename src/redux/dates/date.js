import getStatsFromAPI from "../../api/covidTrackingAPI";

const GET_STATS = 'covid19-tracker/dates/GET_STATS';
const FILTER = 'covid19-tracker/dates/FILTER';

const initialState = [];

export const getStatsAction = (data) => ({
	type: GET_STATS,
	payload: data,
});

export const filterCountriesAction = (countryName) => ({
	type: FILTER,
	payload: countryName,
})


export const getStatsFromAPIDispatcher = (selectedDate) => async (dispatch) => {
	const stats = await getStatsFromAPI(selectedDate);
	dispatch(getStatsAction(stats));
}


const statsReducer = (state = initialState, action) => {
	switch (action.type) {

	case GET_STATS:
		return action.payload;

	case FILTER:
		const selectedCountry = state.filter((item) => (item.name === action.payload))
		return selectedCountry;

	default:
		return state
	}
}

export default statsReducer;

