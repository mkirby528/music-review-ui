import { ADD_ALBUMS } from "./actionTypes";


export const addAlbums = albums => ({
    type: ADD_ALBUMS,
    payload: {
        albums
    }
});

