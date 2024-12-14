const express = require('express')
const chalk = require('chalk')
const path = require('path')
const mongoose = require('mongoose')
const DEFAULT_TEST = require('./constants/test')
const Test = require('./models/test')

const {
	removeAnswer,
	removeQuestion,
	updateQuestion,
	updateAnswer,
	addAnswer,
	addQuestion,
	getTest,
} = require('./test.controller')

const port = 3001
const app = express()
app.set('view engine', 'ejs')
app.set('views', 'pages')

app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(
	express.urlencoded({
		extended: true,
	})
)

app.get('/', async (req, res) => {
	const test = await getTest()

	res.json(test)
})

app.post('/questions', async (req, res) => {
	const { content } = req.body

	const updatedTest = await addQuestion(content)
	res.json(updatedTest)
})

app.post('/questions/:questionId/answers', async (req, res) => {
	const { questionId } = req.params
	const { content } = req.body

	const updatedTest = await addAnswer(questionId, content)
	res.json(updatedTest)
})

app.patch('/questions/:questionId', async (req, res) => {
	const { questionId } = req.params
	const updatedContent = req.body

	const updatedTest = await updateQuestion(questionId, updatedContent)
	res.json(updatedTest)
})

app.patch('/questions/:questionId/answers/:answerId', async (req, res) => {
	const { questionId, answerId } = req.params
	const updatedContent = req.body

	const updatedTest = await updateAnswer(questionId, answerId, updatedContent)
	res.json(updatedTest)
})

app.delete('/questions/:questionId', async (req, res) => {
	const { questionId } = req.params

	const updatedTest = await removeQuestion(questionId)
	res.json(updatedTest)
})

app.delete('/questions/:questionId/answers/:answerId', async (req, res) => {
	const { questionId, answerId } = req.params

	const updatedTest = await removeAnswer(questionId, answerId)
	res.json(updatedTest)
})

mongoose
	.connect(
		'mongodb+srv://kami:jvtqhfthjljve111@cluster.coi65.mongodb.net/Tests?retryWrites=true&w=majority&appName=Cluster'
	)
	.then(async () => {
		count = await Test.countDocuments({})
		if (count === 0) {
			await Test.create(DEFAULT_TEST)
		}
		app.listen(port, () => {
			console.log(chalk.green(`Server has been started on port ${port}...`))
		})
	})
