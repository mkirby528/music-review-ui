import { ADD_ALBUMS } from "../actionTypes";

const initialState = {
    albums: [],
    searchFields: {},
    isLoading: true
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_ALBUMS: {
            return {
                albums: action.payload.albums,
                isLoading: false,
            };
        }
        default:
            return state;
    }
}
