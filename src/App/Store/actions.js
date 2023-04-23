import { ADD_ALBUMS, UPDATE_SEARCH_TERM, UPDATE_DATE_RANGE, UPDATE_SORT_FIELD, UPDATE_SORT_ORDER } from "./actionTypes";


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

export const updateSortField = (sortField) => ({
    type: UPDATE_SORT_FIELD,
    payload: sortField
})

export const updateSortOrder = (sortOrder) => ({
    type: UPDATE_SORT_ORDER,
    payload: sortOrder
})


