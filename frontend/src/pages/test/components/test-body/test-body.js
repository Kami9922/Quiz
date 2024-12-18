import styled from 'styled-components'
import { TestFinalScore } from './components/test-final-score'
import { TestContent } from './components/test-content'
import { useSelector } from 'react-redux'
import { endTestSelector } from '../../../../selectors/end-test-selector'

const TestBodyContainer = ({ className }) => {
	const endTest = useSelector(endTestSelector)

	return (
		<div className={className}>
			{!endTest && <TestContent />}
			{endTest && <TestFinalScore />}
		</div>
	)
}

export const TestBody = styled(TestBodyContainer)`
	padding: 0 25px;
`
