import { fetchQuestions } from '../operations/fetch-questions'

export const saveQuestionsAsync = () => (dispatch) =>
	fetchQuestions().then((loadedQuestions) => {
		const { questions } = loadedQuestions
		dispatch({
			type: 'SET_QUESTIONS',
			payload: questions,
		})
	})
