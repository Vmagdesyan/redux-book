export const initialState = {
	user: {
		name: 'Владимир',
		surname: 'Магдесян',
		age: 24,
	},
}

export function rootReducer(state = initialState) {
	return state
}
