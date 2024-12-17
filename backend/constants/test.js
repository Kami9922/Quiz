const DEFAULT_TEST = {
	title: 'Столицы стран',
	questions: [
		{
			content: 'Столица Англии',
			answers: [
				{
					content: 'Лондон',
					correct: true,
				},
				{
					content: 'Афины',
					correct: false,
				},
			],
		},
		{
			content: 'Столица России',
			answers: [
				{
					content: 'Москва',
					correct: true,
				},

				{
					content: 'Самара',
					correct: false,
				},
			],
		},
		{
			content: 'Столица Японии',
			answers: [
				{
					content: 'Хокайдо',
					correct: false,
				},
				{
					content: 'Токио',
					correct: true,
				},
			],
		},
	],
}

module.exports = DEFAULT_TEST
