import styled from 'styled-components'
import { Button } from '../../components/button/button'
import { TestBody } from './components/test-body/test-body'

const TestContainer = ({ className }) => {
	return (
		<div className={className}>
			<TestBody />
			<div className='test-buttons'>
				<Button>Предыдущий вопрос</Button>
				<Button>Следующий вопрос</Button>
			</div>
		</div>
	)
}

export const Test = styled(TestContainer)`
	& .test-buttons {
		gap: 10px;
		display: flex;
	}
`
