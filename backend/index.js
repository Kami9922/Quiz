const express = require('express')
const chalk = require('chalk')
const path = require('path')
const mongoose = require('mongoose')

const {
	// addAnswer,
	getTest,
	removeTest,
	editTest,
} = require('./test.controller')
const Test = require('./models/Test')

const port = 3000

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
	res.render('index', {
		title: 'Express App',
		notes: await getTest(),
		created: false,
		error: false,
	})
})

app.post('/', async (req, res) => {
	try {
		await addAnswer(req.body.test)
		res.render('index', {
			title: 'Express App',
			question: await getTest(),
			created: true,
			error: false,
		})
	} catch (error) {
		console.error('Creation error', error)
		await addAnswer(req.body.title)
		res.render('index', {
			title: 'Express App',
			created: false,
			error: true,
		})
	}
})

app.put('/:id', async (req, res) => {
	await editTest({ id: req.params.id, title: req.body.title })

	res.render('index', {
		title: 'Express App',
		notes: await getTest(),
		created: false,
		error: false,
	})
})

app.delete('/:id', async (req, res) => {
	await removeTest(req.params)
	res.render('index', {
		title: 'Express App',
		notes: await getTest(),
		created: false,
		error: false,
	})
})

mongoose
	.connect(
		'mongodb+srv://kami:jvtqhfthjljve111@cluster.coi65.mongodb.net/Tests?retryWrites=true&w=majority&appName=Cluster'
	)
	.then(async () => {
		await Test.create({ test: 'Test' })
		app.listen(port, () => {
			console.log(chalk.green(`Server has been started on port ${port}...`))
		})
	})
