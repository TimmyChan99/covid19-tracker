import { data, initialState } from "./reduxMock";
import statsReducer from '../redux/dates/date'
import { getAllStatisticsAction, storeSelectedCountry } from '../redux/dates/date'


const expected = 	[
	{ id: 'selected', name: 'default' },
	[
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
	]
];

test('Test initial state', () => { 
	const state =  statsReducer(initialState, []);
	expect(state).toEqual([{ id: 'selected', name: 'default' }])
})

test('Test storing data', () => { 	
	const state =  statsReducer(initialState, getAllStatisticsAction(data));
	expect(state).toEqual(expected)
})

test('Test selected country ', () => {
	const state =  statsReducer(initialState , storeSelectedCountry('Afghanistan'));
	expect(state).toEqual([{"id": "selected", "name": "Afghanistan"}]);
});
