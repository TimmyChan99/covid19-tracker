import getStatsFromAPI from "../../api/covidTrackingAPI";

const GET_STATS = 'covid19-tracker/dates/GET_STATS';
const STORE_SELECTED_COUNTRY = 'covid19-tracker/dates/STORE_SELECTED_COUNTRY';

const initialState = [
	{ id: 'selected', name : 'default'}
];

export const getStatsAction = (data) => ({
	type: GET_STATS,
	payload: data,
});


export const storeSelectedCountry = (countryName) => ({
	type: STORE_SELECTED_COUNTRY,
	payload: countryName,
})


export const getStatsFromAPIDispatcher = (selectedDate) => async (dispatch) => {
	const stats = await getStatsFromAPI(selectedDate);
	dispatch(getStatsAction(stats));
}


const statsReducer = (state = initialState, action) => {
	switch (action.type) {

	case GET_STATS:
		return [{ id: 'selected', name : 'default'}, ...action.payload];

	case STORE_SELECTED_COUNTRY:
		return state.map((item) => item.id == 'selected' ? { ...item, name : action.payload } : item);

	default:
		return state
	}
}

export default statsReducer;

