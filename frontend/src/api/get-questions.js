export const getQuestions = () =>
	fetch(`http://localhost:5000/questions`)
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok')
			}
			return response.json()
		})
		.then((loadedQuestions) => loadedQuestions)
