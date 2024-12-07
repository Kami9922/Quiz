import styled from 'styled-components'
import { TestAnswer } from './test-answer'

const TestQuestionContainer = ({ className }) => {
	return (
		<div className={className}>
			<div>TestQuestion:</div>
			<TestAnswer />
		</div>
	)
}

export const TestQuestion = styled(TestQuestionContainer)``
