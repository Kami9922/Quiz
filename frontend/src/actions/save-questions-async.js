import { fetchQuestions } from '../operations/fetch-questions'

export const saveQuestionsAsync = (questions) => (dispatch) =>
	fetchQuestions().then((loadedQuestions) => {
		dispatch({
			type: 'SET_QUESTIONS',
			payload: questions,
		})
		return loadedQuestions
	})
