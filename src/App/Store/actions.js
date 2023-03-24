import { ADD_ALBUMS, UPDATE_SEARCH_TERM, UPDATE_DATE_RANGE } from "./actionTypes";


export const addAlbums = albums => ({
    type: ADD_ALBUMS,
    payload: {
        albums
    }
});

export const updateSearchTerm = searchValue => ({
    type: UPDATE_SEARCH_TERM,
    payload: {
        searchValue
    }
})

export const updateDateRange = (minYear, maxYear) => ({
    type: UPDATE_DATE_RANGE,
    payload: [minYear, maxYear]
})


