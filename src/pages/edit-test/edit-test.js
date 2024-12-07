import styled from 'styled-components'
import { Button } from '../../components/button/button'
import { EditQuestion } from './compoonents/edit-question/edit-question'

const EditTestContainer = ({ className }) => {
	return (
		<div className={className}>
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
