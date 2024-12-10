import styled from 'styled-components'
import { TestFinalScore } from './components/test-final-score'
import { TestQuestion } from './components/test-question'

const TestBodyContainer = ({ className }) => {
	return (
		<div className={className}>
			<TestQuestion />
			{!1 && <TestFinalScore />}
		</div>
	)
}

export const TestBody = styled(TestBodyContainer)``
