import styled from 'styled-components'
import { Icon } from '../../../../components/icon/icon'
import { useDispatch, useSelector } from 'react-redux'
import { selectEditingAnswerValue } from '../../../../selectors/edit-selectors/index'
import { editingAnswerAreaValue } from '../../../../actions'
import { useState } from 'react'

const EditAnswerContainer = ({ className, children, answers, answer, key }) => {
	// const checkingFlag = useSelector(selectcheckingFlag)
	const editingAnswerValue = useSelector(selectEditingAnswerValue)
	const dispatch = useDispatch()
	const [isCorrectFlag, setIsCorrectFlag] = useState()

	const onCheck = () => {
		if (!isCorrectFlag) {
			setIsCorrectFlag(true)
			// dispatch(setCheckToSave(!checkingFlag))
		}
	}
	const onUncheck = () => {
		if (isCorrectFlag) {
			setIsCorrectFlag(false)
			// dispatch(setCheckToSave(!checkingFlag))
		}
	}

	const onEditingAnswer = (value) => {
		dispatch(editingAnswerAreaValue(value))
	}

	return (
		<div className={className}>
			<textarea
				value={editingAnswerValue}
				onChange={({ target }) => onEditingAnswer(target.value)}
				placeholder={children ? children : 'Введите текст ответа...'}
				className='edit-answer-area'></textarea>

			<div className='edit-answer-icon-container'>
				<div>
					<Icon
						className='icon-check-field'
						id='fa-circle-o'
						margin='0px 0px 0px 10px'
						size='21px'
						onClick={onCheck}
					/>
					{isCorrectFlag && (
						<Icon
							className='icon-check'
							id='fa-check'
							margin='-18px 0px 0px 13px'
							size='11px'
							onClick={onUncheck}
						/>
					)}
				</div>
				<Icon
					id='fa-trash-o'
					margin='0px 0px 0px 10px'
					size='21px'
				/>
			</div>
		</div>
	)
}

export const EditAnswer = styled(EditAnswerContainer)`
	display: flex;
	margin-bottom: 10px;
	& .answer-body {
		border: 1px solid #000;
		border-radius: 5px;
		padding: 5px;
		width: 100%;
	}

	& .edit-answer-area {
		resize: none;
		border: 1px solid #000;
		border-radius: 10px;
		padding: 5px;
		width: 100%;
	}

	& .edit-answer-icon-container {
		display: flex;
		flex-direction: column;
	}

	& .icon-check-field {
		position: relative;
		/* display: flex;
		justify-content: center; */
	}

	& .icon-check {
		position: absolute;
	}
`
