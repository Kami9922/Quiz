const chalk = require('chalk')

const Test = require('./models/test')

const getTest = async () => {
	const test = await Test.findOne()
	return test
}

const addQuestion = async (questionContent) => {
	const test = await Test.findOne()

	const newQuestion = {
		content: questionContent,
		answers: [],
	}

	test.questions.push(newQuestion)

	console.log(chalk.bgGreen('Question was added!'))

	await test.save()
	return test
}

const addAnswer = async (questionId, answerContent) => {
	const test = await Test.findOne()
	const question = test.questions.id(questionId)

	const newAnswer = {
		content: answerContent,
	}

	question.answers.push(newAnswer)

	console.log(chalk.bgGreen('Answer was added!'))

	await test.save()
	return test
}

const updateAnswer = async (questionId, answerId, updatedContent) => {
	const test = await Test.findOne()

	const question = test.questions.id(questionId)

	const answer = question.answers.id(answerId)

	if (updatedContent.content) {
		answer.content = updatedContent.content
	}
	console.log(chalk.bgGreen('Answer was updated!'))

	await test.save()
	return test
}

const updateQuestion = async (questionId, updatedContent) => {
	const test = await Test.findOne()

	const question = test.questions.id(questionId)

	if (updatedContent.content) {
		question.content = updatedContent.content
	}
	console.log(chalk.bgGreen('Question was updated!'))

	await test.save()
	return test
}

const removeQuestion = async (questionId) => {
	const test = await Test.findOne()

	const question = test.questions.id(questionId)

	question.remove()

	console.log(chalk.bgGreen('Question was removed!'))

	await test.save()
	return test
}

const removeAnswer = async (questionId, answerId) => {
	const test = await Test.findOne()

	const question = test.questions.id(questionId)

	const answer = question.answers.id(answerId)

	answer.remove()

	console.log(chalk.bgGreen('Answer was removed!'))

	await test.save()
	return test
}

module.exports = {
	removeAnswer,
	removeQuestion,
	updateQuestion,
	updateAnswer,
	addAnswer,
	addQuestion,
	getTest,
}
