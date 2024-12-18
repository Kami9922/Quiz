import styled from 'styled-components'
import { Button } from '../../components/button/button'
import { TestBody } from './components/test-body/test-body'
import { useDispatch, useSelector } from 'react-redux'
import { selectQuestions } from '../../selectors/questions-selector'
import { saveCurrentQuestionIndex } from '../../actions/save-current-questions-index'
import { selectCurrrentQuestionIndex } from '../../selectors/current-question-index-selector'
import { selectCheckedAnswers } from '../../selectors/checked-answers-selector'
import { endTestSelector } from '../../selectors/end-test-selector'
import { endTestAction } from '../../actions/end-test-action'
import { useNavigate } from 'react-router-dom'
import { resetState } from '../../actions/reset-state'
import { formatDate } from './utils/format-date'

const TestContainer = ({ className }) => {
	const questions = useSelector(selectQuestions)
	const currentIndex = useSelector(selectCurrrentQuestionIndex)
	const checkedAnswers = useSelector(selectCheckedAnswers)
	const endTest = useSelector(endTestSelector)

	const navigate = useNavigate()

	const dispatch = useDispatch()

	const onGoToNextQuestion = () => {
		const index =
			currentIndex < questions.length + 1 ? currentIndex + 1 : currentIndex

		dispatch(saveCurrentQuestionIndex(index))
	}

	const onGoToPrevQuestion = () => {
		const index = currentIndex - 1
		dispatch(saveCurrentQuestionIndex(index))
	}

	const restartTest = () => {
		dispatch(resetState)
	}

	const onGoToMain = () => {
		dispatch(resetState)
		navigate('/')
	}

	const onEndTest = () => {
		const correctAnswers = checkedAnswers.filter(
			(answer) => answer.correct === true
		)
		let currentDate = formatDate(new Date())
		localStorage.setItem(
			currentDate,
			JSON.stringify({
				answers: correctAnswers,
				questionsLength: questions.length,
			})
		)
		dispatch(endTestAction(true))
	}

	return (
		<div className={className}>
			<TestBody />
			{!endTest ? (
				<div className='test-buttons'>
					<Button
						onClick={onGoToPrevQuestion}
						disabled={currentIndex === 0}>
						Предыдущий вопрос
					</Button>
					{currentIndex < questions.length - 1 ? (
						<Button
							onClick={onGoToNextQuestion}
							disabled={currentIndex >= questions.length - 1}>
							Следующий вопрос
						</Button>
					) : (
						<Button
							disabled={questions.length !== checkedAnswers.length}
							onClick={onEndTest}>
							Завершить тест
						</Button>
					)}
				</div>
			) : (
				<div className='test-buttons'>
					<Button onClick={onGoToMain}>На главную</Button>
					<Button onClick={restartTest}>Пройти ещё раз</Button>
				</div>
			)}
		</div>
	)
}

export const Test = styled(TestContainer)`
	& .test-buttons {
		gap: 10px;
		display: flex;
	}
`
