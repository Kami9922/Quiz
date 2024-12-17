import { getAnswers } from '../api/get-answers'

export const fetchAnswers = async () => {
	const answers = await getAnswers()
	return {
		answers: answers.map((answer) => answer),
	}
}
