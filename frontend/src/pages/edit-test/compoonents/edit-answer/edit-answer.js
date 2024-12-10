import styled from 'styled-components'
import { Icon } from '../../../../components/icon/icon'

const EditAnswerContainer = ({ className }) => {
	return (
		<div className={className}>
			<div className='answer-body'>Ответ 1</div>
			<div className='edit-answer-icon-container'>
				<div>
					<Icon
						className='icon-check-field'
						id='fa-circle-o'
						margin='0px 0px 0px 10px'
						size='21px'
					/>
					{!1 && (
						<Icon
							className='icon-check'
							id='fa-check'
							margin='-20px 0px 0px 13px'
							size='11px'
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
