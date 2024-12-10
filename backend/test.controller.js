const chalk = require('chalk')
const Test = require('./models/Test')
const Answer = require('./models/Answer')
const Question = require('./models/Question')

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

const removeTest = async (id) => {
	await Test.deleteOne({ id })
	console.log(chalk.bgGreen('Note was removed!'))
}

const editTest = async (testData) => {
	await Test.updateOne({ _id: testData.id }, { title: testData.title })
	console.log(chalk.bgGreen('Note was edited!'))
}

module.exports = {
	// addAnswer,
	removeTest,
	getTest,
	editTest,
}
