import styled from 'styled-components'
import { Icon } from '../../../../components/icon/icon'

const EditAnswerContainer = ({ className }) => {
	return (
		<div className={className}>
			<div className='answer-body'>Ответ 1</div>
			<div className='edit-answer-icon-container'>
				<Icon
					id='fa-circle-o'
					margin='0px 0px 0px 10px'
					size='21px'
				/>
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
		border-radius: 10px;
		padding: 5px;
		width: 100%;
	}

	& .edit-answer-icon-container {
		display: flex;
		flex-direction: column;
	}
`
