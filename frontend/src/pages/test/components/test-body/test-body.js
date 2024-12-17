import styled from 'styled-components'
import { TestFinalScore } from './components/test-final-score'
import { TestContent } from './components/test-content'

const TestBodyContainer = ({ className }) => {
	return (
		<div className={className}>
			<TestContent />
			{!1 && <TestFinalScore />}
		</div>
	)
}

export const TestBody = styled(TestBodyContainer)`
	padding: 0 25px;
`
