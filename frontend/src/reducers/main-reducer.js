const initialMainState = {
	storageData: [],
	formattedDate: '',
}

export const mainReducer = (state = initialMainState, { type, payload }) => {
	switch (type) {
		case 'GET_LOCAL_STORAGE_DATA':
			return {
				...state,
				storageData: [{ ...payload }, ...state.storageData],
			}
		case 'SET_FORMATTED_DATE':
			return {
				...state,
				formattedDate: payload,
			}

		default:
			return state
	}
}
