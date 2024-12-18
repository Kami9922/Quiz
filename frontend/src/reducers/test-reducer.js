const initialTestState = {
	questions: [],
	currentIndex: 0,
	checkedAnswers: [],
	endTest: false,
}

export const testReducer = (state = initialTestState, { type, payload }) => {
	switch (type) {
		case 'SET_QUESTIONS':
			return {
				...state,
				questions: payload,
			}
		case 'SET_CURRENT_QUESTION_INDEX':
			return {
				...state,
				currentIndex: payload,
			}
		case 'SET_CURRENT_QUESTION':
			return {
				...state,
				currentQuestion: payload,
			}
		case 'SET_CHECKED_ANSWERS':
			return {
				...state,
				checkedAnswers: [...state.checkedAnswers, payload],
			}
		case 'REMOVE_CHECKED_ANSWER':
			return {
				...state,
				checkedAnswers: state.checkedAnswers.filter(
					(answer) => answer._id !== payload
				),
			}
		case 'END_TEST':
			return {
				...state,
				endTest: true,
			}

		case 'RESET_STATE':
			return initialTestState

		default:
			return state
	}
}
