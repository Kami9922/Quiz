const chalk = require('chalk')

const Answer = require('./models/Answer')
const Question = require('./models/Question')
const Test = require('./models/test')

const getTest = async () => {
	const test = await Test.find()

	return test
}

// const addAnswer = async (answer) => {
// 	await Answer.create({ answer })
// 	console.log(chalk.bgGreen('Answer was added!'))
// }
// const addQuestion = async (question) => {
// 	await Question.create({ question })
// 	console.log(chalk.bgGreen('Question was added!'))
// }

const removeAnswerOrQuestion = async (id) => {
	const test = await Test.find()
	const question = test.questions.id(id)
	const answer = question.answers.id(id)
	if (question) {
		question.remove()
	}
	if (answer) {
		answer.remove()
	}
	test.save(() => console.log(chalk.bgGreen('Note was removed!')))
}

const editTest = async (testData) => {
	await Test.updateOne({ _id: testData.id }, { title: testData.title })
	console.log(chalk.bgGreen('Note was edited!'))
}

module.exports = {
	// addAnswer,
	// removeTest,
	getTest,
	// editTest,
}
