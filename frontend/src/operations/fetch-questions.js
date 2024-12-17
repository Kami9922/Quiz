import { getQuestions } from '../api/get-questions'

export const fetchQuestions = async () => {
	const questions = await getQuestions()
	return {
		questions: questions.map((question) => ({
			...question,
		})),
	}
}
