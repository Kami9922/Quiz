import styled from 'styled-components'
import { Button } from '../../components/button/button'
import { EditQuestion } from './compoonents/edit-question/edit-question'
import { useDispatch, useSelector } from 'react-redux'
import { selectQuestions } from '../../selectors/test-selectors/index'
import { selectNewQuestionValue } from '../../selectors/edit-selectors/index'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { setNewQuestionAreaValue } from '../../actions/index'

const EditTestContainer = ({ className }) => {
	const questions = useSelector(selectQuestions)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const newQuestionValue = useSelector(selectNewQuestionValue)

	const [editingQuestion, setEditingQuestion] = useState(false)

	const onAddingQuestion = () => {
		setEditingQuestion(true)
	}
	const onCloseAddingQuestion = () => {
		setEditingQuestion(false)
	}

	const onAddingQuestionAreaChange = (value) => {
		dispatch(setNewQuestionAreaValue(value))
	}

	return (
		<div className={className}>
			{!editingQuestion ? (
				<Button
					className='adding-question-button'
					width='40%'
					fontSize='23px'
					height='35px'
					margin='0 0 10px 0'
					onClick={onAddingQuestion}>
					+
				</Button>
			) : (
				<>
					<textarea
						value={newQuestionValue}
						placeholder='Введите новый вопрос...'
						onChange={({ target }) => onAddingQuestionAreaChange(target.value)}
						name='adding-question-area'
						className='adding-question-area'></textarea>
					<div className='close-and-save-buttons'>
						<Button
							className='closing-question-button'
							width='35%'
							height='45px'
							onClick={onCloseAddingQuestion}>
							Отмена
						</Button>
						<Button
							className=''
							width='35%'
							height='45px'
							onClick={1}>
							Сохранить
						</Button>
					</div>
				</>
			)}
			{questions.map(({ content, answers, _id: id }) => (
				<EditQuestion
					key={id}
					answers={answers}>
					{content}
				</EditQuestion>
			))}
			<div className='edit-test-buttons'>
				<Button onClick={() => navigate(-1)}>Назад</Button>
				<Button onClick={() => {}}>Сохранить</Button>
			</div>
		</div>
	)
}

export const EditTest = styled(EditTestContainer)`
	display: flex;
	flex-direction: column;
	gap: 15px;

	& .close-and-save-buttons {
		display: flex;
		justify-content: center;
		gap: 15px;
	}
	& .adding-question-button {
		margin: 0 auto;
	}

	& .edit-test-buttons {
		display: flex;
		gap: 10px;
	}

	& .edit-answer-body {
		border-radius: 5px;
	}

	& .adding-question-area {
		border-radius: 5px;
		height: 50px;
		width: 70%;
		margin: 0 auto;
	}

	button {
		border: none;
	}
`
