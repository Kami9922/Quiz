const mongoose = require('mongoose')
const { Schema } = mongoose

const AnswerSchema = new Schema({
	content: String,
	correct: Boolean,
})

const QuestionSchema = new Schema({
	content: String,
	answers: [AnswerSchema],
})

const TestSchema = new Schema({
	title: String,
	questions: [QuestionSchema],
})

const Test = mongoose.model('Test', TestSchema)

module.exports = Test
