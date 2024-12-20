import styled from 'styled-components'
import { Icon } from '../../../../../components/icon/icon'
import {
	removeCheckedAnswer,
	setCheckAnswers,
} from '../../../../../actions/index'

import { useDispatch, useSelector } from 'react-redux'
import { selectCheckedAnswers } from '../../../../../selectors/test-selectors/index'
import { findAnswerMatch } from '../../../utils/find-answer-match'

const TestAnswerContainer = ({ className, answer, question }) => {
	const checkedAnswers = useSelector(selectCheckedAnswers)

	const dispatch = useDispatch()

	const chooseAnswer = () => {
		const hasMatch = findAnswerMatch(question, checkedAnswers)

		if (!hasMatch) {
			dispatch(setCheckAnswers(answer))
		}
	}
	const unchooseAnswer = () => {
		dispatch(removeCheckedAnswer(answer._id))
	}

	return (
		<li className={className}>
			{answer.content}
			<div className='answer-icons'>
				<Icon
					className='icon-check-field'
					id='fa-circle-o'
					margin='0px 0px 0px 10px'
					size='21px'
					onClick={chooseAnswer}
				/>
				{checkedAnswers.includes(answer) && (
					<Icon
						className='icon-check'
						id='fa-check'
						margin='1px 0px 0px 14px'
						size='11px'
						onClick={unchooseAnswer}
					/>
				)}
			</div>
		</li>
	)
}

export const TestAnswer = styled(TestAnswerContainer)`
	display: flex;
	width: 125px;
	justify-content: space-between;
	border: 2px solid #000;
	border-radius: 15px;
	padding: 15px;
	align-items: center;
	font-weight: 600;

	& .answer-icons {
		display: flex;
		align-items: center;
	}

	& .icon-check-field {
		position: relative;
	}

	& .icon-check {
		position: absolute;
	}
`
