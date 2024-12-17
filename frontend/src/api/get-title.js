export const getTitle = () =>
	fetch(`http://localhost:5000/title`)
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok')
			}
			return response.json()
		})
		.then((loadedQuestions) => loadedQuestions)
