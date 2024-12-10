const mongoose = require('mongoose')

const TestSchema = mongoose.Schema({
	test: {
		type: String,
		questions: {
			type: Array,
			question: {
				type: Object,
				content: {
					type: String,
				},
				answers: {
					type: Array,
					answer: {
						type: String,
					},
				},
			},
		},
	},
})

const Test = mongoose.model('Test', TestSchema)

module.exports = Test
