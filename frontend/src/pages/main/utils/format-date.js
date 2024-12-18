export const setDate = (currentDate) => {
	const options = { year: 'numeric', month: 'long', day: 'numeric' }
	const formattedDate = currentDate.toLocaleDateString('ru-RU', options)
	return formattedDate
}
