import styled from 'styled-components'
import { TestAnswer } from './test-answer'

const TestQuestionContainer = ({ className, question }) => {
	const answers = question.answers
	return (
		<li
			className={className}
			key={question._id}>
			<div className='question'>{question.content}</div>
			<ul className='answers-list'>
				{answers.map((answer) => (
					<TestAnswer answer={answer} />
				))}
			</ul>
		</li>
	)
}

export const TestQuestion = styled(TestQuestionContainer)`
	display: flex;
	flex-direction: column;
	gap: 10px;

	& .question {
		font-weight: bold;
		font-size: 20px;
	}

	& .answers-list {
		display: flex;
		gap: 25px;
	}
`
