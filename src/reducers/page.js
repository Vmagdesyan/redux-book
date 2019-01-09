import {
	GET_PHOTOS_REQUEST,
	GET_PHOTOS_SUCCESS,
	GET_PHOTOS_FAIL,
} from '../actions/PageActions'
const initialState = {
	year: 2019,
	photos: [],
	isFetching: false,
	isError: false,
	error: '',
}

export function pageReducer(state = initialState, action) {
	switch (action.type) {
		case GET_PHOTOS_REQUEST:
			return { ...state, year: action.payload, isFetching: true }
		case GET_PHOTOS_SUCCESS:
			return { ...state, photos: action.payload, isFetching: false }
		case GET_PHOTOS_FAIL:
			return { ...state, isError: true, error: action.payload.message }
		default:
			return state
	}
}
