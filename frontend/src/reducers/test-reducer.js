const initialTestState = {}

export const testReducer = (state = initialTestState, action) => {
	switch (action.type) {
		case 'SET_QUESTIONS':
			return {
				...state,
			}

		default:
			return state
	}
}
