import getStatsFromAPI from "../../api/covidTrackingAPI";

const GET_STATS = 'covid19-tracker/dates/GET_STATS';

const initialState = [];

export const getStatsAction = (data) => ({
	type: GET_STATS,
	payload: data,
});

export const getStatsFromAPIDispatcher = (selectedDate) => async (dispatch) => {
	const stats = await getStatsFromAPI(selectedDate);
	dispatch(getStatsAction(stats));
}


const statsReducer = (state = initialState, action) => {
	switch (action.type) {

	case GET_STATS:
		return action.payload;

	default:
		return state
	}
}

export default statsReducer;

