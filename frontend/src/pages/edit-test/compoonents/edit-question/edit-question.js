import styled from 'styled-components'
import { EditAnswer } from '../edit-answer/edit-answer'
import { Button } from '../../../../components/button/button'
import { Icon } from '../../../../components/icon/icon'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editingQuestionAreaValue } from '../../../../actions/index'
import { selectEditingQuestionValue } from '../../../../selectors/edit-selectors/index'

const EditQuestionContainer = ({ children, answers, className }) => {
	const [editingAnswer, setEditingAnswer] = useState(false)

	const editingQuestionValue = useSelector(selectEditingQuestionValue)

	const dispatch = useDispatch()

	const onEditingAnswer = () => {
		setEditingAnswer(true)
	}
	const onCloseEditingQuestion = () => {
		setEditingAnswer(false)
	}

	const onEditingQuestion = (value) => {
		dispatch(editingQuestionAreaValue(value))
	}

	return (
		<div className={className}>
			{!editingAnswer ? (
				<span className='question-title'>{children}</span>
			) : (
				<textarea
					value={editingQuestionValue}
					placeholder={children}
					onChange={({ target }) => onEditingQuestion(target.value)}
					className='edit-question-area'></textarea>
			)}
			{editingAnswer && (
				<div className='edit-panel'>
					<div className='edit-question-active'>
						<Button
							fontSize='24px'
							height='50px'>
							+
						</Button>
						{answers.map((answer) => (
							<EditAnswer
								key={answer._id}
								answer={answer}
								answers={answers}>
								{answer.content}
							</EditAnswer>
						))}
					</div>
				</div>
			)}
			<div className='angles'>
				{!editingAnswer ? (
					<Icon
						id='fa-angle-down'
						margin='0px 0px 0px 0px'
						size='35px'
						onClick={onEditingAnswer}
					/>
				) : (
					<>
						<Icon
							id='fa-angle-up'
							margin='0px 0px 0px 250px'
							size='35px'
							onClick={onCloseEditingQuestion}
						/>
						<Icon
							id='fa-trash-o'
							className='delete-question'
							margin='0px 190px 0px 0px'
							size='125px'
						/>
					</>
				)}
			</div>
		</div>
	)
}

export const EditQuestion = styled(EditQuestionContainer)`
	position: relative;
	border: 1px solid #000;
	border-radius: 10px;
	display: flex;
	padding: 10px;
	flex-direction: column;

	& .question-title {
		padding-top: 10px;
		margin-bottom: 10px;
	}

	& .edit-question-area {
		width: 50%;
		margin-bottom: 10px;
		font-size: 16px;
		border-radius: 10px;
		padding: 5px;
	}

	& .edit-panel {
		display: flex;
		align-items: center;
		gap: 200px;
	}

	& .edit-question-active {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 50%;
	}

	& .angles {
		position: absolute;
		right: 10px;
		top: 5px;
	}

	& .delete-question {
	}
`
