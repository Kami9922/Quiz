import styled from 'styled-components'
import { fetchQuestions } from '../../../../../operations/fetch-questions'
import { useEffect, useState } from 'react'
import { TestQuestion } from './test-question'
import { fetchTitle } from '../../../../../operations/fetch-title'
// import { useDispatch } from 'react-redux'

const TestContentContainer = ({ className }) => {
	const [questions, setQuestions] = useState([])
	const [title, setTitle] = useState('')
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

	useEffect(() => {
		const loadQuestions = async () => {
			try {
				const fetchedQuestions = await fetchQuestions()
				setQuestions(fetchedQuestions.questions)
			} catch (error) {
				console.error('Error fetching questions:', error)
			}
		}
		const loadTitle = async () => {
			try {
				const fetchedTitle = await fetchTitle()
				setTitle(fetchedTitle)
			} catch (error) {
				console.error('Error fetching title:', error)
			}
		}
		loadQuestions()
		loadTitle()
	}, [])

	const currentQuestion = questions[currentQuestionIndex]

	return (
		// <div className={className}>
		// 	<h2>{title}</h2>
		// 	<ul className='question-list'>
		// 		{questions.map((question) => (
		// 			<TestQuestion question={question} />
		// 		))}
		// 	</ul>
		// </div>
		<div className={className}>
			<h2>{title}</h2>
			{currentQuestion ? (
				<ul className='question-list'>
					<TestQuestion question={currentQuestion} />
				</ul>
			) : (
				<p>Загрузка вопросов...</p>
			)}
		</div>
	)
}

export const TestContent = styled(TestContentContainer)`
	& .question-list {
		display: flex;
		flex-direction: column;
		gap: 25px;
	}
	& h2 {
		text-align: center;
	}
`
