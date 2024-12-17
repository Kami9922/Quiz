import styled from 'styled-components'
import { Icon } from '../../../../../components/icon/icon'

const TestAnswerContainer = ({ className, answer }) => {
	return (
		<li
			className={className}
			key={answer._id}>
			{answer.content}
			<div className='answer-icons'>
				<Icon
					className='icon-check-field'
					id='fa-circle-o'
					margin='0px 0px 0px 10px'
					size='21px'
				/>
				{1 && (
					<Icon
						className='icon-check'
						id='fa-check'
						margin='-20px 0px 0px 13px'
						size='11px'
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
`
