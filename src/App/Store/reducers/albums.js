import { ADD_ALBUMS, UPDATE_SEARCH_TERM, UPDATE_DATE_RANGE } from "../actionTypes";

const initialState = {
    albums: [],
    filterValues: {
        searchTerm: '',
        minYear: '1960',
        maxYear: '2023'
    },
    isLoading: true
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_ALBUMS: {
            return {
                ...state,
                albums: action.payload.albums,
                isLoading: false,
            };
        }
        case UPDATE_SEARCH_TERM: {
            let newFilterValues = { ...state.filterValues, searchTerm: action.payload.searchValue }
            console.log(newFilterValues)
            return {
                ...state,
                filterValues: newFilterValues
            }
        }
        case UPDATE_DATE_RANGE: {
            let newFilterValues = { ...state.filterValues, minYear: action.payload[0], maxYear: action.payload[1] }
            console.log(newFilterValues)
            return {
                ...state,
                filterValues: newFilterValues
            }
        }
        default:
            return state;
    }
}
