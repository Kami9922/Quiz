const DEFAULT_TEST = {
	title: 'Столицы стран',
	questions: [
		{
			content: 'Столица Англии',
			answers: [
				{
					answer: {
						content: 'Лондон',
						correct: true,
					},
				},
				{
					answer: {
						content: 'Афины',
						correct: false,
					},
				},
			],
		},
		{
			content: 'Столица России',
			answers: [
				{
					answer: {
						content: 'Москва',
						correct: true,
					},
				},
				{
					answer: {
						content: 'Санкт-Петербург',
						correct: false,
					},
				},
			],
		},
		{
			content: 'Столица Японии',
			answers: [
				{
					answer: {
						content: 'Хокайдо',
						correct: false,
					},
				},
				{
					answer: {
						content: 'Токио',
						correct: true,
					},
				},
			],
		},
	],
}

module.exports = DEFAULT_TEST
