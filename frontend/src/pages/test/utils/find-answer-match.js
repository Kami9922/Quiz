export const findAnswerMatch = (question, answers) => {
	const hasMatch = question?.answers.some((answerFromQuestion) =>
		answers.some((answer) => answer._id === answerFromQuestion._id)
	)
	return hasMatch
}
