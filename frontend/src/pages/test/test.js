import styled from 'styled-components'
import { Button } from '../../components/button/button'
import { TestBody } from './components/test-body/test-body'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectQuestions } from '../../selectors/questions-selector'

const TestContainer = ({ className }) => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
	const questions = useSelector(selectQuestions)

	const handleNextQuestion = () => {
		setCurrentQuestionIndex((prevIndex) =>
			Math.min(prevIndex + 1, questions.length - 1)
		)
	}

	const handlePrevQuestion = () => {
		setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0))
	}

	return (
		<div className={className}>
			<TestBody />
			<div className='test-buttons'>
				<Button
					onClick={handlePrevQuestion}
					disabled={currentQuestionIndex === 0}>
					Предыдущий вопрос
				</Button>
				<Button
					onClick={handleNextQuestion}
					disabled={currentQuestionIndex >= questions.length - 1}>
					Следующий вопрос
				</Button>
			</div>
		</div>
	)
}

export const Test = styled(TestContainer)`
	& .test-buttons {
		gap: 10px;
		display: flex;
	}
`
