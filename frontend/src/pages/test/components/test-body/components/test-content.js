import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { TestQuestion } from './test-question'
import { fetchTitle } from '../../../../../operations/fetch-title'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setCurrentQuestion } from '../../../../../actions/index'
import {
	selectQuestions,
	selectCurrrentQuestionIndex,
	selectCurrentQuestion,
} from '../../../../../selectors/test-selectors/index'

const TestContentContainer = ({ className }) => {
	const questions = useSelector(selectQuestions)
	const currentIndex = useSelector(selectCurrrentQuestionIndex)
	const currentQuestion = useSelector(selectCurrentQuestion)

	const [title, setTitle] = useState('')

	const dispatch = useDispatch()

	useEffect(() => {
		const loadTitle = async () => {
			try {
				const fetchedTitle = await fetchTitle()
				setTitle(fetchedTitle)
			} catch (error) {
				console.error('Error fetching title:', error)
			}
		}

		loadTitle()
	}, [dispatch])

	useEffect(() => {
		dispatch(setCurrentQuestion(questions[currentIndex]))
	}, [currentIndex, questions, dispatch])

	return (
		<div className={className}>
			<h2>{title}</h2>
			{currentQuestion ? (
				<div className='question-list'>
					<TestQuestion question={currentQuestion} />
				</div>
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
