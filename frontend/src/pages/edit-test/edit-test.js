import styled from 'styled-components'
import { Button } from '../../components/button/button'
import { EditQuestion } from './compoonents/edit-question/edit-question'

const EditTestContainer = ({ className }) => {
	return (
		<div className={className}>
			<Button
				height='28px'
				margin='0 0 10px 0'>
				+
			</Button>
			{/* <textarea className='edit-answer-body'></textarea> */}
			<EditQuestion></EditQuestion>
			<EditQuestion></EditQuestion>
			<EditQuestion></EditQuestion>
			<div className='edit-test-buttons'>
				<Button>Назад</Button>
				<Button>Сохранить</Button>
			</div>
		</div>
	)
}

export const EditTest = styled(EditTestContainer)`
	& .edit-test-buttons {
		display: flex;
		gap: 10px;
	}
`
