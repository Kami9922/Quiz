import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectQuestions } from '../../../../../selectors/questions-selector'
import { selectCheckedAnswers } from '../../../../../selectors/checked-answers-selector'

const TestFinalScoreContainer = ({ className }) => {
	const questions = useSelector(selectQuestions)
	const checkedAnswers = useSelector(selectCheckedAnswers)

	const correctAnswers = checkedAnswers.filter(
		(answer) => answer.correct === true
	)

	return (
		<div className={className}>
			<h2 className='final-score-title'>Правильных ответов:</h2>
			<span className='final-score'>
				{correctAnswers.length}/{questions.length}
			</span>
		</div>
	)
}

export const TestFinalScore = styled(TestFinalScoreContainer)`
	display: flex;
	flex-direction: column;
	text-align: center;
	margin-bottom: 60px;

	& .final-score-title {
		font-size: 30px;
	}

	& .final-score {
		font-size: 24px;
		color: green;
		font-weight: bold;
	}
`
