const initialEditState = {
	checkingFlag: false,
}

export const editReducer = (state = initialEditState, { type, payload }) => {
	switch (type) {
		case 'SET_CHECK_TO_SAVE':
			return {
				...state,
				checkingFlag: payload,
			}
		case 'SET_NEW_QUESTION_AREA_VALUE':
			return {
				...state,
				newQuestionAreaValue: payload,
			}
		case 'EDITING_QUESTION_AREA_VALUE':
			return {
				...state,
				EditingQuestionAreaValue: payload,
			}
		case 'EDITING_ANSWER_AREA_VALUE':
			return {
				...state,
				EditingAnswerAreaValue: payload,
			}

		default:
			return state
	}
}
