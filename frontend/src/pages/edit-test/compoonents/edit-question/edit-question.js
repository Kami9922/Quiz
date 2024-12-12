import styled from 'styled-components'
import { EditAnswer } from '../edit-answer/edit-answer'
import { Button } from '../../../../components/button/button'
import { Icon } from '../../../../components/icon/icon'

const EditQuestionContainer = ({ className }) => {
	return (
		<div className={className}>
			<div className='question-title'>Вопрос 1</div>
			{/* <div className='edit-panel'>
				<div className='edit-question-active'>
					<Button height='50px'>+</Button>
					<EditAnswer></EditAnswer>
				</div>
				<Icon
					id='fa-trash-o'
					className='delete-question'
					margin='0px 0px 0px 0px'
					size='100px'
				/>
			</div>

			<div className='angle-down'>
				<Icon
					id='fa-angle-down'
					margin='0px 0px 0px 10px'
					size='35px'
				/>
				{!1 && (
					<Icon
						id='fa-angle-up'
						margin='0px 0px 0px 10px'
						size='35px'
					/>
				)}
			</div> */}
		</div>
	)
}

export const EditQuestion = styled(EditQuestionContainer)`
	position: relative;
	border: 1px solid #000;
	border-radius: 10px;
	padding: 10px;

	& .question-title {
		padding-top: 10px;
		margin-bottom: 10px;
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

	& .angle-down {
		position: absolute;
		right: 10px;
		top: 5px;
	}
`
