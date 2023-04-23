import { ADD_ALBUMS, UPDATE_SEARCH_TERM, UPDATE_DATE_RANGE, UPDATE_SORT_FIELD, UPDATE_SORT_ORDER } from "../actionTypes";

const initialState = {
    albums: [],
    filterValues: {
        searchTerm: '',
        minYear: '1960',
        maxYear: '2023',
        sortField: "DateListened",
        sortOrder: "desc"
    },
    isLoading: true,
};

export default function reducer(state = initialState, action) {
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
            return {
                ...state,
                filterValues: newFilterValues
            }
        }
        case UPDATE_DATE_RANGE: {
            let newFilterValues = { ...state.filterValues, minYear: action.payload[0], maxYear: action.payload[1] }
            return {
                ...state,
                filterValues: newFilterValues
            }
        }
        case UPDATE_SORT_FIELD: {
            let newFilterValues = { ...state.filterValues, sortField: action.payload }
            return {
                ...state,
                filterValues: newFilterValues
            }

        }
        case UPDATE_SORT_ORDER: {
            let newFilterValues = { ...state.filterValues, sortOrder: action.payload }
            return {
                ...state,
                filterValues: newFilterValues
            }

        }
        default:
            return state;
    }
}
